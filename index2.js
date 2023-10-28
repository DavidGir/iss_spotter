const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./utilities");

// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  });
