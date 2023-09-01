import express from "express";
import ProductManager from "../dao/managers/productmanager.js";
import  __dirname  from "../utils.js";


const pmanager = new ProductManager(__dirname + "/files/products.json");
const router = express.Router();

router.get("/", async(req,res)=>{
    const listaProductos = await pmanager.getProducts(req.query);
    console.log(listaProductos);
    res.render("home", {listaProductos});
});


router.get("/products", async (req, res) => {
    const products = await pmanager.getProducts(req.query);
    res.render("products", products);
});

router.get("/products/:pid", async (req, res) => {
    const pid = req.params.pid;
    const products = await pmanager.getProductById(pid);

    res.render("products", products);
});

router.get("/realtimeProducts", (req,res)=>{
    res.render("realtimeProducts");
});

router.get("/chat", (req, res) => {
    res.render("chat");
});

export default router;
