'use strict';

const express = require('express');
const mongoose = require('mongoose');   
const body_parser = require('body-parser');
const cors = require('cors');
const conf = require('dotenv').config();

const app = express();
const buscadorRoutes = require('./routes/buscador.routes');
const empresaRoutes = require('./routes/empresa.routes');
const usuEmpresarialRoutes = require('./routes/usuEmpresarial.routes');

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended:false }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const db = mongoose.connect(process.env.MONGO_URI, {}).then((res) => {
    console.log('----DATABASE CONNECTED----');

    app.listen(process.env.PORT, (res) => {
        console.log(`Server listening at http://localhost:${process.env.PORT}`);
    })
}, (err) => {console.log('--DATABASE CONNECTION ERROR', err)});

app.use('/buscadores', buscadorRoutes);
app.use('/empresa',empresaRoutes);
app.use('/usuEmpresarial',usuEmpresarialRoutes);