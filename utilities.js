//Keeping code modular; utils file will be used for functions which can be used throughout the whole project:

const printPassTimes = function(passTimes) {
  // Loop through passTimes:
  for (const pass of passTimes) {
    // Initialize variable to contain a date object with current date and time:
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    // Contain duration value from the pass object:
    const duration = pass.duration;
    // To capture details of each passes:
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};



module.exports = { printPassTimes };