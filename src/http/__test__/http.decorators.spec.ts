import {httpMethod, Method} from "http/http.decorators"
import attachDecoratortoClass from 'http/__test__/fixtures/attachDecoratorToClass'
import {NextApiRequest, NextApiResponse} from "next"

function requestMockFactory(method: Method): NextApiRequest {
	return { method } as unknown as NextApiRequest
}

describe('decorators', () => {
	describe('core', () => {
		let requestMock!: NextApiRequest
		const sendFn = jest.fn()
		const statusFn = jest.fn().mockImplementation(() => ({send: sendFn}))

		const resMock = {
			status: statusFn
		} as unknown as NextApiResponse
		
		beforeEach(() => {
			requestMock = requestMockFactory('GET')
			sendFn.mockClear()
			statusFn.mockClear()
		})

		describe('method matches', () => {
			const decorator = httpMethod(['GET'])
			const decoratedClass = attachDecoratortoClass(decorator)

			it('should call the original function', () => {
				decoratedClass.testMethod(requestMock, resMock)
				expect(sendFn).not.toHaveBeenCalled()
				expect(statusFn).not.toHaveBeenCalled()
			})
		})

		describe('method not maching', () => {
			const decorator = httpMethod(['POST'])
			const decoratedClass = attachDecoratortoClass(decorator)

			it('should call the original function', () => {
				decoratedClass.testMethod(requestMock, resMock)
				expect(sendFn).toHaveBeenCalled()
				expect(statusFn).toHaveBeenCalled()
			})
		})

	})
})

