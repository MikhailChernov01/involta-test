'use strict';

const http = require('http');
const WebSocket = require('ws');


const server = http.createServer();

server.listen(8000, () => {
  console.log('Listen port 8000');
});

const ws = new WebSocket.Server({ server });

//generates user ID
const getUniqueID = () => {
  const s4 = () =>  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return "id" + s4() + '-' + s4();
}

//ws connection
ws.on('connection', (connection, req) => {
  const ip = req.socket.remoteAddress;
  let userID = getUniqueID();
  console.log(`Connected user: ${userID}; on ip ${ip}`);
  connection.on(`message`, message => {
    console.log(`Received from user ${userID}: ` + message);
    for (const client of ws.clients) {
      if (client.readyState !== WebSocket.OPEN) continue;
      if (client === connection) continue;
      client.send(message);
    }
  });
  connection.on('close', () => {
    console.log(`Disconnected ${ip}`);
  });
});
