import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../Header.js';
describe('<Header />', () => {
  describe('render()', () => {
    test('component should be wrapped in a header tag', () => {
      const wrapper = shallow(<Header />);
      expect(toJson(wrapper).node.type).toEqual('header');
    });
    test('component should have an h1 tag', () => {
      const wrapper = shallow(<Header />);
      expect(toJson(wrapper).children[0].type).toEqual('h1');
    });
    test('component should have a nav tag', () => {
      const wrapper = shallow(<Header />);
      expect(toJson(wrapper).children[1].type).toEqual('nav');
    });
  });
});