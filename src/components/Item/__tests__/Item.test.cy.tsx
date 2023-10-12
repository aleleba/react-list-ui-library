import React from 'react';
import { Item, Status } from '@components';

describe('Testing Item Component', () => {
  beforeEach(() => {
    cy.mount(<Item name='Item Test' status={Status.DONE} />);
  })
  it('Show Item name', () => {
    cy.get('span').contains('Item Test');
  })
  it('Show Item as Checked', () => {
    cy.get('input').should('be.checked');
  })
})
