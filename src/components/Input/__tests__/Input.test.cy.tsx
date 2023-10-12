import React from 'react';
import { Input } from '@components';

describe('Testing Input Component', () => {
  beforeEach(() => {
    cy.mount(<Input placeholder='Test Placeholder' />);
  });
  it('Show right text on placeholder', () => {
    cy.get('input').should('have.attr', 'placeholder', 'Test Placeholder');
  });
})
