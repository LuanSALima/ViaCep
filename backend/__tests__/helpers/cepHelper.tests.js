const { cepIsValid, cepFormat } = require('../../src/helpers/cepHelper');

describe("Helper cepIsValid", () => {
	it("'TEST' should be invalid", () => {
		expect(cepIsValid('TEST')).toBe(false);
	});

	it("'abcdefgh' should be invalid", () => {
		expect(cepIsValid('abcdefgh')).toBe(false);
	});

	it("'123ab789' should be invalid", () => {
		expect(cepIsValid('123ab789')).toBe(false);
	});

	it("'123456-789' should be invalid", () => {
		expect(cepIsValid('123456-789')).toBe(false);
	});

	it("'123456789' should be invalid", () => {
		expect(cepIsValid('123456-789')).toBe(false);
	});

	it("'08850120' should be valid", () => {
		expect(cepIsValid('08850120')).toBe(true);
	});

	it("'08850-120' should be valid", () => {
		expect(cepIsValid('08850-120')).toBe(true);
	});
});

describe("Helper cepFormat", () => {
	it("'TEST' should return null", () => {
		expect(cepFormat('TEST')).toBe(null);
	});

	it("'08850120' should be formatted to '08850-120'", () => {
		expect(cepFormat('08850120')).toBe('08850-120');
	});

	it("'08850-120' should be formatted to '08850-120'", () => {
		expect(cepFormat('08850-120')).toBe('08850-120');
	});
});