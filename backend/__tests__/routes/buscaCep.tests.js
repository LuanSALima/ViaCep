const app = require('../../src/app');

const supertest = require("supertest");
const request = supertest(app);

describe("GET /cep/test", () => {
	it("Should acess the route and return status 200 with message", () => {
		return request.get('/cep/test')			
			.expect(200)
			.then(response => {
				expect(response.body.success).toBe(true);
				expect(typeof response.body.message).toBe('string');
			});
	});
});