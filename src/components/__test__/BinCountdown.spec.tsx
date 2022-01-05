import React from 'react'
import {mount, ReactWrapper} from 'enzyme'
import BinCountdown from 'components/BinCountdown'

describe('BinCountdown', () => {
	let component!: ReactWrapper
	beforeAll(() => {
		const testDate = new Date('2022-01-01')
		jest.setSystemTime(testDate)
		component = mount(<BinCountdown days="2022-01-03" />)
	})

	it('should render', () => {
		expect(component.exists()).toBe(true)
	})

	it('should tell us when the next collection date is', () => {
		expect(component.find('h1').text()).toBe('Next collection is in 2 days')
		expect(component.find('h1').hasClass('text-3xl')).toBe(true)
	})

	it('should render the header as red if the difference is less than a day', () => {
		const comp = mount(<BinCountdown days="2022-01-02" />)
		expect(comp.find('h1').hasClass('text-red')).toBe(true)
	})
})
