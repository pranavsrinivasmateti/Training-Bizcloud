"use strict";
const jwt = require("jsonwebtoken");
// --------------add the middleware function
module.exports.middleware = async (event, context) => {
  console.log("middleware");
  let token = event.headers.token;
  let verified = await new Promise((resolve, reject) => {
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) resolve(false);
      resolve(true);
    });
  });
  if (!verified) {
    context.end();
    return { statusCode: 403, body: "Authentication Failed!" };
  }
};
// ------------add the authentication logic function
module.exports.login = async (event) => {
  // create token
  const token = jwt.sign({ username: "something", id: 10 }, "secretkey");
  return {
    statusCode: 200,
    body: JSON.stringify({ token: token }),
  };
};
// -------------add the API function
module.exports.sample = async (event) => {
  console.log("sampleapi");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "API is working!",
    }),
  };
};