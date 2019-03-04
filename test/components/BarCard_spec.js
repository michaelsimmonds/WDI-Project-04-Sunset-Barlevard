/* global describe, it, beforeEach */

import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme' // shallow renders the dom, but only top level, so for functional components shallow is fine
import BarCard from '../../src/components/bars/BarCard'

describe('BarCard tests', () => {

  let wrapper

  beforeEach(done => {
    const props = {
      id: 1,
      name: 'The Alma',
      hero: 'alma.png'
    }
    wrapper = shallow(<BarCard {...props}/>)
    done()
  })

  it('should render the correct HTML', done => {
    expect(wrapper.find('.container').length).to.eq(1)
    expect(wrapper.find('.image').length).to.eq(1)
    expect(wrapper.find('.text-overlay').length).to.eq(1)
    done()
  })

  it('should render the correct data', done => {
    expect(wrapper.find({ to: '/bars/1' }).length).to.eq(1)
    expect(wrapper.find('figure').prop('style').backgroundImage).to.eq('url(alma.png)')
    expect(wrapper.find('.text-overlay').text()).to.eq('The Alma')
    done()
  })
})
