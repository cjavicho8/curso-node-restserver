const { response, request } = require('express');

const get = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const post = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const put = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const patch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

const _delete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}


module.exports = {
    get,
    post,
    put,
    patch,
    _delete
}
