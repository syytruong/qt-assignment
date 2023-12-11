const express = require('express');
const router = express.Router();

const certificateController = require('../controllers/certificateController');

// POST route for creating a new certificate
router.post('/', certificateController.createCertificate);

// GET route for listing all certificates
router.get('/', certificateController.listCertificates);

// DELETE route for deleting a certificate by ID
router.delete('/:id', certificateController.deleteCertificate);

module.exports = router;
