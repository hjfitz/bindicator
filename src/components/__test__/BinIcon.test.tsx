import React from 'react'
import BinIcon, {bins} from 'components/BinIcon'

import {CollectionType} from 'bins/bins.types'

import {mount} from 'enzyme'

describe('BinIcon', () => {
	it('should render a trash icon for regular waste', () => {
		const component = mount(<BinIcon binType={CollectionType.Waste} />)
		const img = component.find('img')
		expect(img.props().src).toBe(bins[CollectionType.Waste].url)
		expect(img.props().alt).toBe(bins[CollectionType.Waste].alt)
	})


	it('should render a recycle icon for recyclables', () => {
		const component = mount(<BinIcon binType={CollectionType.Recycle} />)
		const img = component.find('img')
		expect(img.props().src).toBe(bins[CollectionType.Recycle].url)
		expect(img.props().alt).toBe(bins[CollectionType.Recycle].alt)
	})

	it('should pass down a className', () => {
		const component = mount(<BinIcon className="testing" binType={CollectionType.Recycle} />)
		const img = component.find('img')
		expect(img.hasClass('testing')).toBe(true)
	})
})
