import toTitleCase from 'utils/toTitleCase'

describe('toTitleCase', () => {
	it('should transform a string', () => {
		const expected = 'Test'
		const testData = 'test'
		expect(toTitleCase(testData)).toBe(expected)
		expect(toTitleCase(testData)).not.toBe(testData)
	})

	it('should leave the remaining characters lowercase', () => {
		const expected = 'eST'
		const testData = 't' + expected
		const transformed = toTitleCase(testData)
		const toCompare = transformed.substring(1)
		expect(toCompare).toBe(expected)
	})

	it('should work with a single char', () => {
		expect(() => toTitleCase('t')).not.toThrow()
		expect(toTitleCase('t')).toBe('T')
	})
})
