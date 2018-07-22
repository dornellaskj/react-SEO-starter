import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeBody from '../HomeBody.js';
describe('<HomeBody />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<HomeBody />);
      expect(toJson(wrapper).node.rendered.rendered).toEqual('Example body');
    });
  });
});