const fs = require("fs");
const util = require("util");
const fetch = require("node-fetch");
const readFile = util.promisify(fs.readFile);
const opn = require("opn");
require('dotenv').config()

async function deploy(script) {
  let resp = await fetch(
    "https://api.cloudflare.com/client/v4/accounts/" +
      process.env.CLOUDFLARE_ACCOUNTID +
      "/workers/scripts/" +
      process.env.CLOUDFLARE_SCRIPT,
    {
      method: "PUT",
      headers: {
        "cache-control": "no-cache",
        "content-type": "text/javascript",
        "X-Auth-Email": process.env.CLOUDFLARE_EMAIL,
        "X-Auth-Key": process.env.CLOUDFLARE_KEY
      },
      body: script
    }
  );

  let data = await resp.json();
  return data;
}

readFile("dist/worker.js", "utf8").then(data => {
  deploy(data).then(d => {
    console.log(d.errors);
  });
});
