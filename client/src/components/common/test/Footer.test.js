import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../Footer.js';
describe('<Footer />', () => {
  describe('render()', () => {
    test('component should be wrapped in a footer tag', () => {
      const wrapper = shallow(<Footer />);
      expect(toJson(wrapper).node.type).toEqual('footer');
    });
  });
});