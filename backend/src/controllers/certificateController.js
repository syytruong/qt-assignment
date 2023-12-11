// You might need additional imports depending on your implementation
// For instance, import your certificate model here

exports.createCertificate = async (req, res) => {
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
        await CertificateModel.delete(req.params.id);

        res.status(200).json({ message: "Certificate deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting certificate", error: error.message });
    }
};
