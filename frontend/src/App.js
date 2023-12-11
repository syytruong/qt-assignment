import React from 'react';
import CertificateForm from './components/CertificateForm';
import CertificateList from './components/CertificateList';

function App() {
    return (
        <div>
            <h1>Certificate Management System</h1>
            <CertificateForm />
            <CertificateList />
        </div>
    );
}

export default App;