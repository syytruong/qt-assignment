import React from 'react';
import axios from 'axios';

function CertificateList({ certificates, onCertificateDelete }) {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/certificates/${id}`);
            onCertificateDelete();
        } catch (error) {
            console.error('Error deleting certificate:', error);
        }
    };

    return (
        <ul>
            {certificates.map(cert => (
                <li key={cert.id}>
                    {cert.name} - {cert.issuer} - {cert.dateIssued}
                    <button onClick={() => handleDelete(cert.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default CertificateList;
