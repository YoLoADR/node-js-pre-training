// __tests__/app.test.js
const request = require('supertest');
const app = require('../app'); // Assure-toi que le chemin est correct

// Teste la route racine GET '/'
describe('GET /', () => {
    it('doit renvoyer un message de bienvenue', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('Welcome to the Express server!');
    });
});

// Teste la route POST '/echo'
describe('POST /echo', () => {
    it('doit renvoyer le même message qui a été envoyé', async () => {
        const message = { msg: 'Hello, world!' };
        const res = await request(app).post('/echo').send(message);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(message);
    });
});

// Teste la route GET '/users'
describe('GET /users', () => {
    it('doit renvoyer une liste d\'utilisateurs', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        // Vérifie que la réponse est un tableau
        expect(res.body).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: 'Alice' }),
            expect.objectContaining({ name: 'Bob' })
        ]));
    });
});
