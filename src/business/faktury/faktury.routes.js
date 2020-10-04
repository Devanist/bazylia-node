
const express = require('express');
const fakturyControllers = require('./faktury.controllers.js')
const router = express.Router();

const { crudControllers, getFaktury, postFaktura, getFaktura } = fakturyControllers;

// /faktury
router
  .route('/')
  .get(getFaktury)
  .post(postFaktura)

// /faktury/:id
router
  .route('/:id')
  .get(getFaktura)
  .put(crudControllers.updateOne)
  .delete(crudControllers.removeOne)


module.exports = router;
