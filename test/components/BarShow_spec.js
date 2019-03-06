/* global describe, after, before, beforeEach, it */
import React from 'react'
import Promise from 'bluebird'
import axios from 'axios'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme' //use mount instead of shallow as want to show eveything
import { MemoryRouter, Route } from 'react-router-dom'  // need id of bar which is in url, whichs is in react-router-dom
import BarsShow from '../../src/components/bars/BarsShow'

describe('BarsShow tests', () => {
  let wrapper, response

  before(done => {
    response = Promise.resolve({
      data: {
        id: 1,
        name: 'The Alma',
        hero: 'alma.jpg',
        description: 'It is good',
        address: '111 address, address street',
        lat: 0,
        lng: 0
      }
    })

    sinon.stub(axios, 'get').returns(response) //when axios makes request, it will just return the promise above. Sinon has taken controll of axios. The stub is essentially faking the request.
    done()
  })

  after(done => {
    axios.get.restore() //axios can now make requests again/ sinon no longer has control.
    done()
  })

  beforeEach(done => {
    wrapper = mount( //this is history. basically loads page at /bars/1 one url
      <MemoryRouter initialEntries={['/bars/1']}>
        <Route path="/bars/:id" component={BarsShow} />
      </MemoryRouter>
    )
    done()
  })

  it('should render the correct HTML', done => {
    response.then(() => {
      wrapper.update()
      expect(wrapper.find('section').prop('style').backgroundImage).to.eq('url(alma.jpg)')
      expect(wrapper.find('h1.title').text()).to.eq('The Alma')
      expect(wrapper.find('.add').text()).to.eq('111 address, address street')
      expect(wrapper.find('.column .bar-show-div:last-child').text()).to.eq('It is good')
      done()
    })
  })
})
