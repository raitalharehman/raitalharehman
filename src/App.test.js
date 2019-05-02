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

it('renders welcome message', () => {
  const wrapper = shallow(<Home />);
  const welcome = <h2>Talha Rehman</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
