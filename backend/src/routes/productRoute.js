const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductsTesting } = require('../controllers/products');

router.route('/').get(getAllProducts); //on '/' will go to the getAllProducts function 
router.route('/testing').get(getAllProductsTesting); //on '/testing' will go to the getAllProductsTesting function 

module.exports = router;