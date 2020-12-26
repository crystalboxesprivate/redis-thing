// require("dotenv").config();
// const redis = require("redis");
// const express = require("express");
// const endpoint = process.env.REDISENDPOINT_URL || "127.0.0.1:6379";
// const password = process.env.REDIS_PASSWORD || null;

// const [host, port] = endpoint.split(":");

// const client = redis.createClient(port, host);
// client.auth(password, (error, reply) => {
//   const app = express();
//   app.use(express.static("public"));

//   app.get("/c", (_, res) => {
//     client.incr("counter", (e, r) => {
//       if (e) {
//         return res.send(403);
//       }
//       res.send("Counter result: " + r);
//     });
//   });

//   app.listen(process.env.PORT || 4000);
// });

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Home Page Route"));

app.get("/about", (req, res) => res.send("About Page Route"));

app.get("/portfolio", (req, res) => res.send("Portfolio Page Route"));

app.get("/contact", (req, res) => res.send("Contact Page Route"));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
