import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CertificateForm from './components/CertificateForm';
import CertificateList from './components/CertificateList';

function App() {
    const [certificates, setCertificates] = useState([]);

    const fetchCertificates = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3001/certificates');
            setCertificates(response.data);
        } catch (error) {
            toast.error("Error fetching certificates");
        }
    }, []);

    // Fetch certificates initially and after every creation
    useEffect(() => {
        fetchCertificates();
    }, [fetchCertificates]);

    return (
        <div className='h-full pt-[10vh] flex flex-col items-center gap-8'>
            <h1 className='font-semibold text-4xl'>Certificates Management System</h1>
            <CertificateForm onCertificateCreate={fetchCertificates} />
            <CertificateList certificates={certificates} onCertificateDelete={fetchCertificates} />
            <ToastContainer />
        </div>
    );
}

export default App;
