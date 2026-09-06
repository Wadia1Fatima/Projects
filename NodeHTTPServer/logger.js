const fs = require("fs");
const path = require("path");

const logsFolder = path.join(__dirname, "logs");

const logFile = path.join(logsFolder, "server.log");

// Create logs folder if it doesn't exist

if (!fs.existsSync(logsFolder)) {
  fs.mkdirSync(logsFolder);
}

// Log function

function log(message) {
  const time = new Date().toLocaleString();

  const logMessage = `[${time}] ${message}\n`;

  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Could not write log:", err);
    }
  });
}

// Export function

module.exports = {
  log,
};
