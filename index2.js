const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./utilities");

// Call and error handling:
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
