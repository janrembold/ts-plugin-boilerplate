///<reference types="mocha"/>
///<reference types="chai"/>

import { expect } from 'chai';
import Demo from '../../src/lib/Demo';

describe('Demo', () => {
	let subject: Demo;

	beforeEach(function () {
		subject = new Demo();
	});

	describe('#add', () => {

		it('should add two numbers together', () => {
			const result: number = subject.add(2, 3);
			expect(result).to.equal(5);
		});

		it('should return a number', () => {
			const result: number = subject.add(2, 3);
			expect(result).to.be.a('number');
		});

	});
});
