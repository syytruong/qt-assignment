const CertificateModel = require('../models/certificateModel');

exports.createCertificate = async (req, res) => {
    if (!req.body.name || !req.body.issuer || !req.body.dateIssued) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const certificate = await CertificateModel.create(req.body);
        res.status(201).json({ message: "Certificate created successfully", data: certificate });
    } catch (error) {
        res.status(500).json({ message: "Error creating certificate", error: error.message });
    }
};

exports.listCertificates = async (req, res) => {
    try {
        const certificates = await CertificateModel.findAll();
        res.status(200).json(certificates);
    } catch (error) {
        res.status(500).json({ message: "Error listing certificates", error: error.message });
    }
};

exports.deleteCertificate = async (req, res) => {
    try {
        const result = await CertificateModel.delete(req.params.id);
        if (result.deleted === 0) {
            return res.status(404).json({ message: "Certificate not found" });
        }
        res.status(200).json({ message: "Certificate deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting certificate", error: error.message });
    }
};
