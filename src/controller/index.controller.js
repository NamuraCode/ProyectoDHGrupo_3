const path = require('path');
const productos = require('../model/product.json');
const fs = require('fs');

controller = {
    index: (req, res) => {
        res.render('index')
    },

    productCart: (req, res) => {
        res.render('productCart')
    },

    products: (req, res) => {
        res.render('products', {
            "ingresan": productos
        })
    },

    login: (req, res) => {
        res.render('login')
    },

    productDetail: (req, res) => {
        let id = req.params.id
        console.log(id)
        res.render('productDetail', {
            "ingresan": productos,
            "id": id
        })
    },

    register: (req, res) => {
        res.render('register')
    },

    productForm: (req, res) => {
        res.render('productForm')
    },

    addProduct: (req, res) => {
        res.render('addProduct')
    },

    editProduct: (req, res) => {
        res.render('editProduct')
    },

    removeProduct: (req, res) => {
        res.render('removeProduct')
    },

    create: (req, res) => {
        let create={
            id:(productos.length + 1),
            name:req.body.product,
            image:req.body.image,
            description:req.body.description,
            category:req.body.category,
            price:req.body.price,
        };
        productos.push(create)
        const producto = JSON.stringify(productos, null, 6)
        fs.writeFileSync(path.join(__dirname,'../model/product.json'),producto)
        console.log(create)
        res.redirect('/products')
    }
}

module.exports = controller;