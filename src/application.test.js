import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Application from './application';

const wrapper = shallow(<Application />);

describe('Application', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Application />, div);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have props for store', () => {
    expect(wrapper.prop('store')).not.toBe({});
  });
});
