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
    // If HTTP status code is valid; body of the response is parsed as JSON and ip address is extracted:
    if (response.statusCode === 200) {
      const ip = JSON.parse(body).ip;
      // Callback null for the error and fetched ip address: 
      callback(null, ip);
    }
  });
};

module.exports = { fetchMyIP };