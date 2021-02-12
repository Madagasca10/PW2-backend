const express = require('express')

const app = express();


app.get('/',(req, res) => 
      res.send("Introdução a API"));

      let port = process.env.PORT || 8080;

const importData = require ("./data.json");
const importRecipes = require("./recipes.json");
app.use(express.json());

app.get("/Utilizadores", (req,res) =>{
      res.send(importData)
  } ) 
  
  app.get("/Utilizadores/:Nome", (req,res) =>{
      res.send(req.params.Nome)
  } ) 
  
  app.get("/Favoritos", (req,res) =>{
      res.send(importRecipes)
  } ) 

  
  app.post("/Utilizadores", (req,res) =>{

      if(!req.body.Nome || !req.body.password){
          res.status(400).send("Require name and password");
          return;
      
      }
          const user = {
              Nome: req.body.Nome,
              password: req.body.password, 
              Favoritos: req.body.Favoritos, 
          };
          importData.push(user);
          res.send(user);
      })
      
      
      app.post("/Favoritos", (req,res) =>{
      
          if(!req.body.Favoritos){
              res.status(400).send("Require name and password");
              return;
          
          }
              const user = {
                  Favoritos: req.body.Favoritos, 
              };
              importRecipes.push(user);
              res.send(user);
          })
      
      
      app.put("/Utilizadores/Nome", (req,res) =>{
      
          const user = user.find(c=> c.Nome === parseInt(req.params.Nome));
          if(!user){
              res.status(404).send("The name doesn´t exist");
              return;
          }
      
           user = {
              Nome: req.body.Nome,
              password: req.body.password, 
              Favoritos: req.body.Favoritos, 
          };
          res.send(user);
      });

      app.delete("/Utilizadores", (req,res) =>{

            user = {
               Nome: req.body.Nome,
               password: req.body.password, 
               Favoritos: req.body.Favoritos, 
           };
           const index = importData.indexOf(user);
           importData.splice(index,1);
           res.send(user);
       });
       
       app.delete("/Favoritos", (req,res) =>{
       
           user = {
              Nome: req.body.Nome,
              password: req.body.password, 
              Favoritos: req.body.Favoritos, 
          };
          const index = importData.indexOf(user);
          importRecipes.splice(index,1);
          res.send(user);
       });
       
       
       app.listen(port, () =>{
           console.log(`Example app is listening on port http://localhost:${port}`);
       } );