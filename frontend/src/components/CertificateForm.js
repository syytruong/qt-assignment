import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function CertificateForm({ onCertificateCreate }) {
    const [formData, setFormData] = useState({ name: '', issuer: '', dateIssued: '' });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.name) {
            formIsValid = false;
            errors["name"] = "Name is required.";
        }

        if (!formData.issuer) {
            formIsValid = false;
            errors["issuer"] = "Issuer is required.";
        }

        if (!formData.dateIssued) {
            formIsValid = false;
            errors["dateIssued"] = "Date Issued is required.";
        }

        setErrors(errors);
        return formIsValid;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await axios.post('http://localhost:3001/certificates', formData);
            setFormData({ name: '', issuer: '', dateIssued: '' });
            onCertificateCreate(); // Update the list in parent component
            toast.success("Certificate created successfully!");
        } catch (error) {
            console.error('Error creating certificate:', error);
            toast.error("Failed to create certificate.");
        }
    };

    return (
        <form
            className='flex flex-col gap-8 min-w-[320px] w-[30%]'
            onSubmit={handleSubmit}
        >
            <div>
                <label className="block text-gray-900 text-md font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Certificate name" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                    value={formData.name} 
                    onChange={handleChange}
                />
                {errors?.name && <p className="text-red-700 text-md mt-1">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-gray-900 text-md font-bold mb-2">
                    Issuer
                </label>
                <input
                    type="text"
                    name="issuer"
                    placeholder="Certificate issuer" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                    value={formData.issuer} 
                    onChange={handleChange}
                />
                {errors?.issuer && <p className="text-red-700 text-md mt-1">{errors.issuer}</p>}
            </div>

            <div>
                <label className="block text-gray-900 text-md font-bold mb-2">
                    Date Issued
                </label>
                <input
                    type="date"
                    name="dateIssued"
                    placeholder="Date issued" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                    value={formData.dateIssued} 
                    onChange={handleChange}
                />
                {errors?.dateIssued && <p className="text-red-700 text-md mt-1">{errors.dateIssued}</p>}
            </div>

            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-green-800">
                Create Certificate
            </button>


            <ToastContainer />
        </form>
    );
}

export default CertificateForm;
