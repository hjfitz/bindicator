import React from 'react'
import {mount} from 'enzyme'
import BinType from 'components/BinType'
import {CollectionType} from 'bins/bins.types'

describe('BinType', () => {
	it('should be green if not waste', () => {
		const component = mount(<BinType binType={CollectionType.Recycle} />)
		expect(component.find('span').hasClass('text-green-700')).toBe(true)
	})

	it('should not be green if waste', () => {
		const component = mount(<BinType binType={CollectionType.Waste} />)
		expect(component.find('span').getDOMNode().classList.length).toBe(0)
	})

	it('should render the bin type', () => {
		const component = mount(<BinType binType={CollectionType.Recycle} />)
		expect(component.find('span').text()).toBe('Recycle')
	})
})
