import React from 'react';
import { List, Status } from '@components';

describe('Testing List Component', () => {
  beforeEach(() => {
    cy.mount(<List list={[
      {
        name: 'First Item',
        status: Status.DONE
      },
      {
        name: 'Second Item',
        status: Status.TODO
      },
      {
        name: 'Third Item',
        status: Status.DONE
      }
    ]} />);
  })
  it('Show All Items in a list', () => {
    cy.get('input').should('have.length', 3);
  })
})
