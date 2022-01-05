import {NextApiRequest, NextApiResponse} from "next";

export type MethodDecoratorFn = (_: any, __: string, descriptor: PropertyDescriptor) => PropertyDescriptor

export interface IDecoratedClass {
	testMethod: (req: NextApiRequest, res: NextApiResponse) => void
}

export default function attachDecoratortoClass(testDecorator: MethodDecoratorFn): IDecoratedClass {
	class DecoratedClass implements IDecoratedClass {

		@testDecorator
		testMethod(req: NextApiRequest, res: NextApiResponse) {}
	}

	return new DecoratedClass()
}

