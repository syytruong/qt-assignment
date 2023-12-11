import React, { useState } from 'react';
import axios from 'axios';

function CertificateForm({ onCertificateCreate }) {
    const [formData, setFormData] = useState({ name: '', issuer: '', dateIssued: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/certificates', formData);
            setFormData({ name: '', issuer: '', dateIssued: '' });
            onCertificateCreate(); // Update the list in parent component
        } catch (error) {
            console.error('Error creating certificate:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="issuer" 
                placeholder="Issuer" 
                value={formData.issuer} 
                onChange={handleChange}
            />
            <input 
                type="date" 
                name="dateIssued" 
                value={formData.dateIssued} 
                onChange={handleChange}
            />
            <button type="submit">Create Certificate</button>
        </form>
    );
}

export default CertificateForm;
