import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CertificateForm from './components/CertificateForm';
import CertificateList from './components/CertificateList';

function App() {
    const [certificates, setCertificates] = useState([]);

    const fetchCertificates = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3000/certificates');
            setCertificates(response.data);
        } catch (error) {
            console.error('Error fetching certificates:', error);
        }
    }, []);

    // Fetch certificates initially and after every creation
    useEffect(() => {
        fetchCertificates();
    }, [fetchCertificates]);

    return (
        <div>
            <h1>Certificate Management System</h1>
            <CertificateForm onCertificateCreate={fetchCertificates} />
            <CertificateList certificates={certificates} />
        </div>
    );
}

export default App;
