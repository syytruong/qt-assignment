const express = require('express');
const router = express.Router();

const certificateController = require('../controllers/certificateController');

/**
 * @swagger
 * /certificates:
 *   post:
 *     summary: Create a new certificate
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - issuer
 *               - dateIssued
 *             properties:
 *               name:
 *                 type: string
 *               issuer:
 *                 type: string
 *               dateIssued:
 *                 type: string
 *     responses:
 *       201:
 *         description: Certificate created successfully.
 */
router.post('/', certificateController.createCertificate);

/**
 * @swagger
 * /certificates:
 *   get:
 *     summary: Retrieve a list of certificates
 *     responses:
 *       200:
 *         description: A list of certificates.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   issuer:
 *                     type: string
 *                   dateIssued:
 *                     type: string
 */
router.get('/', certificateController.listCertificates);

/**
 * @swagger
 * /certificates/{id}:
 *   delete:
 *     summary: Delete a certificate by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the certificate to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Certificate deleted successfully.
 */
router.delete('/:id', certificateController.deleteCertificate);

module.exports = router;
