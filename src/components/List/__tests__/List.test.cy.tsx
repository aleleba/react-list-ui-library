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
      ]}
      handleChangeState={() => {}}
    />);
  })
  it('Show All Items in a list', () => {
    cy.get('[role="checkbox"]').should('have.length', 3);
  })
})
