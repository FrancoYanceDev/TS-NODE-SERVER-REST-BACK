"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router
    .get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'ok'
    });
})
    // x-www-form-urlencoded, verbo POST
    .post('/mensajes', (req, res) => {
    const cuerpo = req.body.data;
    res.json({
        ok: true,
        cuerpo: cuerpo
    });
})
    .post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.data; //Body form
    const dataUrl = req.params.id; //Paràmetros en la URL
    res.json({
        ok: true,
        cuerpo: cuerpo,
        dataUrl
    });
});
exports.default = router;
