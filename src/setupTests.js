// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock IntersectionObserver for Framer Motion
global.IntersectionObserver = class IntersectionObserver {
	constructor(callback, options) {
		this.callback = callback;
		this.options = options;
	}

	observe(target) {
		// You can trigger the callback immediately or after a timeout if needed for testing animations
		// this.callback([{ isIntersecting: true, target }]);
		return null;
	}

	unobserve(target) {
		return null;
	}

	disconnect() {
		return null;
	}
};
