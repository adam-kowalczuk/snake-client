const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    port: PORT,
    host: IP
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AK");
  });

  conn.on('data', () => {
    console.log(`you ded cuz you idled`);
  });


  return conn;
};

module.exports = {
  connect
};