const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243"
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AK");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 1000);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1500);
  });

  conn.on('data', () => {
    console.log(`you ded cuz you idled`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};