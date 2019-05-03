import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Home from './components/pages/home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders function length < 25', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.length).toEqual(1);
});
