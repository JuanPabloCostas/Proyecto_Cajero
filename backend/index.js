import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"grillstore"
});

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json("Hello this is the backend");
});

app.get("/books",(req,res)=>{
    const q="SELECT * FROM productos";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req,res)=>{
    const q = "INSERT INTO productos (nombre,precio,disponibilidad) VALUES (?)";
    const values = [
        req.body.nombre,
        req.body.precio,
        req.body.disponibilidad
    ];
    db.query(q,[values],(err, data)=>{
        if (err) return res.json(err);
        return res.json("Se añadio producto");

    });
});

app.delete("/books/:id",(req,res)=>{
    const bookID = req.params.id;
    const q = "DELETE FROM productos WHERE iD_Prod = ?";

    db.query(q,[bookID],(err,data)=>{
        if (err) return res.json(err);
        return res.json("Se elimino producto");
    });
});

app.put("/books/:id",(req,res)=>{
    const bookID = req.params.id;
    const q = "UPDATE productos SET nombre = ?, precio = ?, disponibilidad = ?  WHERE iD_Prod = ?";
    const values = [
        req.body.nombre,
        req.body.precio,
        req.body.disponibilidad
    ];
    db.query(q,[...values,bookID],(err,data)=>{
        if (err) return res.json(err);
        return res.json("Se actualizo producto");
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("The server is running...");
});