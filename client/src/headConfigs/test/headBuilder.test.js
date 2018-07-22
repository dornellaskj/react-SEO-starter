import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HeadBuilder from '../headBuilder.js';
let wrapper;
let mockConfigs = {
  "title": "SEO Starter",
  meta: [
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "description", content: "description here." },
    { property: "og:url", content: "https://www.example.com/" }
  ],
  scss: [
    { rel: "canonical", href: "https://www.example.com/" },
    { rel: "stylesheet", type: "text/css", href: "/home.css" }
  ],
  jsonLd: `{
  }`
};
let mockBadConfigs = {
  "title": "SEO Starter",
  jsonLd: `{
  }`
};
describe('<HeadBuilder />', () => {
  describe('render()', () => {
    beforeEach(()=> {
      wrapper = shallow(<HeadBuilder headJson={mockConfigs} />);
    });
    test('component container should be a head tag', () => {
      expect(toJson(wrapper).node.type).toEqual('head');
    });
    test('component should have a title tag', () => {
      expect(toJson(wrapper).children[0].type).toEqual('title');
    });
    test('component should have meta tags', () => {
      for(let i = 1; i < 4; i++) {
        expect(toJson(wrapper).children[i].type).toEqual('meta');
      }
    });
    test('component should have link tags', () => {
      for(let i = 4; i < 6; i++) {
        expect(toJson(wrapper).children[i].type).toEqual('link');
      }
    });
    test('component should have Json schema tag', () => {
      expect(toJson(wrapper).children[6].type).toEqual('script');
    });
  });



  describe('render() with bad data', () => {
    beforeEach(()=> {
      wrapper = shallow(<HeadBuilder headJson={mockBadConfigs} />);
    });
    test('component container should be a head tag', () => {
      expect(toJson(wrapper).node.type).toEqual('head');
    });
    test('component should have a title tag', () => {
      expect(toJson(wrapper).children[0].type).toEqual('title');
    });
    test('component should have no meta or link tags Json schema tag', () => {
      expect(toJson(wrapper).children[1].type).toEqual('script');
    });
  });
});


