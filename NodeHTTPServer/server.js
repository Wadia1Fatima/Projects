const http = require("http");
const fs = require("fs");
const path = require("path");
const logger = require("./logger");

const PORT = 3000;

const publicFolder = path.join(__dirname, "public");
const dataFolder = path.join(__dirname, "data");
const logsFolder = path.join(__dirname, "logs");

const filePath = path.join(dataFolder, "message.txt");
const logFilePath = path.join(logsFolder, "server.log");

// Create required folders/files if they don't exist

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

if (!fs.existsSync(logsFolder)) {
  fs.mkdirSync(logsFolder);
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    "Welcome to my Node.js server!\n\nThis text is stored inside message.txt.",
  );
}

if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, "");
}

// Create HTTP server

const server = http.createServer((req, res) => {
  logger.log(`${req.method} ${req.url}`);

  // HTML PAGES

  if (req.method === "GET" && req.url === "/") {
    serveFile(res, "index.html", "text/html");
  } else if (req.method === "GET" && req.url === "/read") {
    serveFile(res, "read.html", "text/html");
  } else if (req.method === "GET" && req.url === "/edit") {
    serveFile(res, "edit.html", "text/html");
  } else if (req.method === "GET" && req.url === "/stream") {
    serveFile(res, "stream.html", "text/html");
  } else if (req.method === "GET" && req.url === "/logs") {
    serveFile(res, "logs.html", "text/html");
  }

  // CSS
  else if (req.method === "GET" && req.url === "/style.css") {
    serveFile(res, "style.css", "text/css");
  }

  // READ FILE API
  else if (req.method === "GET" && req.url === "/api/read") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        sendJSON(res, {
          success: false,
          message: "Could not read the file.",
        });

        return;
      }

      sendJSON(res, {
        success: true,
        content: data,
      });
    });
  }

  // REPLACE FILE CONTENT
  else if (req.method === "POST" && req.url === "/api/write") {
    receiveData(req, res, (body) => {
      const content = body.content;

      if (typeof content !== "string") {
        sendJSON(res, {
          success: false,
          message: "Invalid content.",
        });

        return;
      }

      fs.writeFile(filePath, content, "utf8", (err) => {
        if (err) {
          sendJSON(res, {
            success: false,
            message: "Could not update the file.",
          });

          return;
        }

        logger.log("message.txt was updated");

        sendJSON(res, {
          success: true,
          message: "File updated successfully.",
        });
      });
    });
  }

  // APPEND TO FILE
  else if (req.method === "POST" && req.url === "/api/append") {
    receiveData(req, res, (body) => {
      const content = body.content;

      if (typeof content !== "string" || content.trim() === "") {
        sendJSON(res, {
          success: false,
          message: "Please enter some text.",
        });

        return;
      }

      fs.appendFile(filePath, `\n${content}`, "utf8", (err) => {
        if (err) {
          sendJSON(res, {
            success: false,
            message: "Could not append to the file.",
          });

          return;
        }

        logger.log("Text appended to message.txt");

        sendJSON(res, {
          success: true,
          message: "Text added successfully.",
        });
      });
    });
  }

  // STREAM API
  else if (req.method === "GET" && req.url === "/api/stream") {
    streamFile(res);
  }

  // LOGS API
  else if (req.method === "GET" && req.url === "/api/logs") {
    fs.readFile(logFilePath, "utf8", (err, data) => {
      if (err) {
        sendJSON(res, {
          success: false,
          message: "Could not read server logs.",
        });

        return;
      }

      sendJSON(res, {
        success: true,
        logs: data,
      });
    });
  }

  // 404 PAGE
  else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });

    res.end(`
      <!DOCTYPE html>

      <html>

      <head>

        <title>404</title>

        <style>

          body {
            font-family: Arial;
            text-align: center;
            padding: 100px;
            background: #f5f7fb;
            color: #1f2937;
          }

          a {
            color: #6366f1;
            text-decoration: none;
          }

        </style>

      </head>

      <body>

        <h1>404</h1>

        <p>The page you are looking for does not exist.</p>

        <a href="/">Return to Dashboard</a>

      </body>

      </html>
    `);
  }
});

// SERVE FILE

function serveFile(res, fileName, contentType) {
  const filePathToServe = path.join(publicFolder, fileName);

  fs.readFile(filePathToServe, (err, data) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });

      res.end("Could not load the requested file.");

      return;
    }

    res.writeHead(200, {
      "Content-Type": contentType,
    });

    res.end(data);
  });
}

// RECEIVE POST DATA

function receiveData(req, res, callback) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const parsedData = JSON.parse(body);

      callback(parsedData);
    } catch (error) {
      sendJSON(res, {
        success: false,
        message: "Invalid JSON data.",
      });
    }
  });
}

// SEND JSON RESPONSE

function sendJSON(res, data) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}

// STREAM FILE

function streamFile(res) {
  const readStream = fs.createReadStream(filePath, {
    encoding: "utf8",
  });

  let content = "";

  let chunks = 0;

  readStream.on("data", (chunk) => {
    content += chunk;

    chunks++;
  });

  readStream.on("end", () => {
    sendJSON(res, {
      success: true,
      file: "message.txt",
      streamType: "Readable Stream",
      encoding: "utf8",
      chunks: chunks,
      content: content,
    });
  });

  readStream.on("error", (error) => {
    logger.log(`Stream error: ${error.message}`);

    sendJSON(res, {
      success: false,
      message: "Could not read file using stream.",
    });
  });
}

// START SERVER

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);

  logger.log(`Server started on port ${PORT}`);
});
