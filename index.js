const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  // We have IP then proceed to getting coordinates:
  fetchCoordsByIP(ip, (error, data) => {
    if (error) {
      console.log("There is an error", error);
      return;
    }
    console.log("Data", data);
  });
});