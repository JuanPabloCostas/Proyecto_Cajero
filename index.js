import express from 'express';
const app = express();

app.get("/",(req, res, next) =>{
    res.status(200);
    res.send("Bienvendo");
});

app.listen(3000, () => {
    console.log("The server is running...");
});