import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Content from '../content';

describe('Common: Content', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content />, div);
  });

  test('should render without throwing an error', () => {
    const wrapper = shallow(<Content>Hello World!</Content>);
    expect(wrapper.text()).toContain('Hello World!');
  });

  // test('should have props for full', () => {
  //   const wrapper = shallow(<Content full />);
  //   expect(wrapper.prop('full')).toBeDefined();
  // });
});
