const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require ("./data.json"); 
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World");
} );

app.get("/Utilizadores", (req,res) =>{
    res.send(importData)
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


app.listen(port, () =>{
    console.log(`Example app is listening on port http://localhost:${port}`);
} );