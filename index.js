require("dotenv").config();
const redis = require("redis");
const express = require("express");
const endpoint = process.env.REDISENDPOINT_URL || "127.0.0.1:6379";
const password = process.env.REDIS_PASSWORD || null;

const [host, port] = endpoint.split(":");

const client = redis.createClient(port, host);
client.auth(password, (error, reply) => {
  const app = express();
  app.use('/', express.static(__dirname + "/build"));

  app.get("/c", (_, res) => {
    client.incr("counter", (e, r) => {
      if (e) {
        return res.send(403);
      }
      res.send("Counter result: " + r);
    });
  });

  app.listen(process.env.PORT || 4000);
});
