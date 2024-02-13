// LoginForm.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders login form with email and password fields', () => {
  const { getByLabelText, getByPlaceholderText } = render(<LoginForm />);

  const emailInput = getByPlaceholderText('Enter your email');
  const passwordInput = getByPlaceholderText('Enter your password');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('calls onSubmit function when submit button is clicked', () => {
  const handleSubmit = jest.fn();
  const { getByTestId } = render(<LoginForm onSubmit={handleSubmit} />);

  const submitButton = getByTestId('submit-button');
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
});
