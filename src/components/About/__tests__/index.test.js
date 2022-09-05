import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..'; 

// This function ensures that after each test we won't have any leftover memory data that could give us false results. 
afterEach(cleanup);

// the string we pass here is for desfcribing which component is being tested. 
describe('About component', () => {
  // renders About test 
  // first test
  // In the first Argument, a string declares what is being tested. In this case rendering. The 2nd arguments is a callback function that runs the test. 
  it('renders', () => {
    render(<About />);
  })
  // second test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot(); 
  })
})
