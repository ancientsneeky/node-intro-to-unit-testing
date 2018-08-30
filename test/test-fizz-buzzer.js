// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

const expect = require('chai').expect;

describe('fizzBuzzer', function() {

	it('should return fizz-buzz on multiples of 15',function() {
		const normalCases = [15,30,45];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input)
			expect(answer).to.be.equal('fizz-buzz');
		});
	});
	it('should return buzz on multiples of 5', function() {
		const normalCases = [5,10,20];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.be.equal('buzz');
		});
	});
	it('should return fizz on multiples of 3', function() {
		const normalCases = [3,6,9];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.be.equal('fizz');
		});
	});
	it('should return number if not %3,5,15', function() {
		const normalCases = [1,4,7]
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.be.equal(input);
		});
	});
	it('should throw err if not a num', function() {
		const badCases = ['luffy', true, false, {obj: 'obj'}, [3,6,9]];
		badCases.forEach(function(input) {
				expect(function() {fizzBuzzer(input);}).to.throw(Error);
		});
	});
});


