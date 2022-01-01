import {NextApiRequest, NextApiResponse} from "next"

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

function httpMethod(methods: Method[]) {
	return function decorateWithMethod(_: any, __: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value
		function validateMethod(req: NextApiRequest, res: NextApiResponse) {
			if (!methods.includes(req.method as Method)) {
				res.status(405).send('Method not implemented')
			} else {
				return original.apply(this, arguments) 
			}
		}
		descriptor.value = validateMethod
		return descriptor
	}
}

export function Get() {
	return httpMethod(['GET'])
}

export function Post() {
	return httpMethod(['POST'])
}



