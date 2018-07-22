import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../HomePage.js';
describe('<HomePage />', () => {
  describe('render()', () => {
    test('component should have a Header', () => {
      const wrapper = shallow(<HomePage />);
      expect(toJson(wrapper).children[0].type).toEqual('Header');
    });
    test('component should have a HomePage', () => {
      const wrapper = shallow(<HomePage />);
      expect(toJson(wrapper).children[1].type).toEqual('HomeBody');
    });
    test('component should have a Footer', () => {
      const wrapper = shallow(<HomePage />);
      expect(toJson(wrapper).children[2].type).toEqual('Footer');
    });
  });
});