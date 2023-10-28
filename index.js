// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');
const { printPassTimes } = require("./utilities");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);

//   // We have IP then proceed to getting coordinates:
//   fetchCoordsByIP(ip, (error, coords) => {
//     if (error) {
//       console.log("There is an error", error);
//       return;
//     }
//     console.log("Coordinates", coords);
      
//     // We have coordinates proceed to get ISS flyover times:
//     fetchISSFlyOverTimes(coords, (error, flyoverTimes) => {
//       if (error) {
//         console.log("There is an error", error);
//         return;
//       }
//       console.log("Flyover Times", flyoverTimes);
//     });
//   });
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
  // // success, print out the deets!
  // // Loop through passTimes:
  // for (const pass of passTimes) {
  //   // Initialize variable to contain a date object with current date and time:
  //   const date = new Date();
  //   // Contain duration value from the pass object:
  //   const duration = pass.duration;
  //   // To capture details of each passes:
  //   console.log(`Next pass at ${date} for ${duration} seconds!`);
  // }
});