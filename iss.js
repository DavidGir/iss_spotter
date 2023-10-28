const request = require("request");


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

// Define url holding API endpoint to get ip address:
const url = "https://api.ipify.org?format=json";


const fetchMyIP = function(callback) {
  // use request to make HTTP GET request to the url:
  request(url, (error, response, body) => {
    // Error handling; if error during request callback returns error object and null for the ip address:
    if (error) {
      return callback(error, null);
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const ip = JSON.parse(body).ip;
    // Callback null for the error and fetched ip address:
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, cb) {
  // Define variable to api endpoint to be able to fetch coordinates from ip:
  const url = `https://ipwho.is/${ip}`;
  
  request(url, (error, response, body) => {
    if (error) {
      return cb(error, null);
    }
    const data = JSON.parse(body);

    if (!data.success) {
      const msg = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP: ${data.ip}`;
      cb(Error(msg), null);
      return;
    }
  
    const latitude = data.latitude;
    const longitude = data.longitude;
    const coords = { latitude, longitude };
    cb(null, coords);
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  // Define lat and long object as the coordinates:
  const { latitude, longitude } = coords;
  
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
  
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching fly over times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    //ISS url has body object that contains flyovers under response key; if no body.response data on flyovers:
    const parsedBody = JSON.parse(body);
    if (!parsedBody.response) {
      return callback(Error("No flyover times returned"), null);
    }
      
    const flyovers = parsedBody.response;
    // Callback null for the error and fetched fly overs:
    callback(null, flyovers);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };