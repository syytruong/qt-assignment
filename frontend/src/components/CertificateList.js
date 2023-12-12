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
        <table className="w-1/2 mx-auto border-collapse border border-gray-300">
            <thead>
                <tr className="border-b">
                    <th className="border border-gray-300 text-left p-2">Certificate Name</th>
                    <th className="border border-gray-300 text-left p-2">Issued By</th>
                    <th className="border border-gray-300 text-left p-2">Date</th>
                    <th className="border border-gray-300"></th>
                </tr>
            </thead>

            <tbody>
                {certificates.map((cert, index) => (
                    <tr key={index} className="border-b">
                        <td className="border border-gray-300 p-2">{cert.name}</td>
                        <td className="border border-gray-300 p-2">{cert.issuer}</td>
                        <td className="border border-gray-300 p-2">{cert.dateIssued}</td>
                        <td className="border border-gray-300 p-2">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-red-800"
                                onClick={() => handleDelete(cert.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CertificateList;
