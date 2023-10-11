import React from 'react';
import { ContainerList } from '@components';

describe('Testing ContainerList Component', () => {
  beforeEach(() => {
    cy.mount(<ContainerList title='Test Title' />);
  });
  it('Show Title of Container List', () => {
    cy.get('div').contains('Test Title');
  });
})
