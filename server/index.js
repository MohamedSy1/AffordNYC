const express = require('express')
const path = require('path')

const app = express()

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};

const DirectPathToDist = path.join(__dirname, "..", "website", "dist")

app.use(logRoutes);
app.use(express.static(DirectPathToDist))

app.listen(process.env.PORT, () => {
    return `The server is running in port: ${process.env.PORT}`
})  