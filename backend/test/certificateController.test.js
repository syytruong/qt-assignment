const request = require('supertest');
const app = require('../src/app');
const CertificateModel = require('../src/models/certificateModel');

jest.mock('../src/models/certificateModel');

describe('Certificate Management API', () => {
    describe('POST /certificates', () => {
        const newCertificate = { name: "Sample Certificate", issuer: "Sample Issuer", dateIssued: "2023-01-01" };

        test('should create a new certificate with valid data', async () => {
            CertificateModel.create.mockResolvedValue({ id: 1, ...newCertificate });

            const response = await request(app)
                .post('/certificates')
                .send(newCertificate);

            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('data');
            expect(response.body.data).toHaveProperty('id');
        });

        test('should return 400 for missing required fields', async () => {
            const response = await request(app)
                .post('/certificates')
                .send({ name: "Incomplete Data" });

            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe("Missing required fields");
        });

        test('should handle errors and return 500', async () => {
            CertificateModel.create.mockImplementation(() => {
                throw new Error('Database error');
            });

            const response = await request(app)
                .post('/certificates')
                .send(newCertificate);

            expect(response.statusCode).toBe(500);
            expect(response.body.message).toBe("Error creating certificate");
        });
    });

    describe('GET /certificates', () => {
        test('should return all certificates', async () => {
            CertificateModel.findAll.mockResolvedValue([{ id: 1, name: "Sample Certificate", issuer: "Sample Issuer", dateIssued: "2023-01-01" }]);

            const response = await request(app).get('/certificates');

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBeTruthy();
        });

        test('should handle errors and return 500', async () => {
            CertificateModel.findAll.mockImplementation(() => {
                throw new Error('Database error');
            });

            const response = await request(app).get('/certificates');

            expect(response.statusCode).toBe(500);
            expect(response.body.message).toBe("Error listing certificates");
        });
    });

    // Test for DELETE /certificates/:id
    describe('DELETE /certificates/:id', () => {
        test('should delete a certificate with valid ID', async () => {
            CertificateModel.delete.mockResolvedValue({ deleted: 1 });

            const response = await request(app).delete('/certificates/1');

            expect(response.statusCode).toBe(200);
        });

        test('should return 400 for missing ID', async () => {
            const response = await request(app).delete('/certificates/');

            expect(response.statusCode).toBe(404);
            expect(response.text).toBe("Sorry, can't find that!");
        });

        test('should return 404 for non-existent certificate', async () => {
            CertificateModel.delete.mockResolvedValue({ deleted: 0 });

            const response = await request(app).delete('/certificates/999');

            expect(response.statusCode).toBe(404);
            expect(response.body.message).toBe("Certificate not found");
        });

        test('should handle errors and return 500', async () => {
            CertificateModel.delete.mockImplementation(() => {
                throw new Error('Database error');
            });

            const response = await request(app).delete('/certificates/1');

            expect(response.statusCode).toBe(500);
            expect(response.body.message).toBe("Error deleting certificate");
        });
    });
});
