const jwt = require("jsonwebtoken");


const payload = {
   sub: "user123",
   role: "admin"
};


const token = jwt.sign(payload, "my-secret", {
   issuer: "my-key",
   expiresIn: "1h"
});


console.log(token);