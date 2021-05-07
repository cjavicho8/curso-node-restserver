
const { Router } = require('express');
const usuarios = require('../controllers/usuarios');

const router = Router();

router.get( '/', usuarios.get);
router.post( '/', usuarios.post);
router.put( '/:id', usuarios.put);
router.patch( '/', usuarios.patch);
router.delete( '/', usuarios._delete);


module.exports = router;
