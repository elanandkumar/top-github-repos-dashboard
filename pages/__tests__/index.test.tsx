import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('Home page', () => {
  it('SHOULD have App component', () => {
    const output = mount(<Index />);

    expect(output.find('#App').exists()).toBe(true);
  });
});
