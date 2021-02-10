const express = require('express')

const app = express();


app.get('/',(req, res) => 
      res.send("Introdução a API"));

      let port = process.env.PORT || 8080;