const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  // We have IP then proceed to getting coordinates:
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("There is an error", error);
      return;
    }
    console.log("Coordinates", coords);
      
    // We have coordinates proceed to get ISS flyover times:
    fetchISSFlyOverTimes(coords, (error, flyoverTimes) => {
      if (error) {
        console.log("There is an error", error);
        return;
      }
      console.log("Flyover Times", flyoverTimes);
    });
  });
});