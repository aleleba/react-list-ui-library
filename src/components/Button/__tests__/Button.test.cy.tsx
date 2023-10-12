import React from 'react';
import { Button } from '@components';

describe('Testing Button Component', () => {
  beforeEach(() => {
    cy.mount(<Button />);
  });
  it('Show Button', () => {
    cy.get('button').should('have.length', 1);
  });
})
