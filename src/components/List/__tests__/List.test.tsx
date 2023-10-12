import React from 'react';
import { render, screen } from '@testing-library/react';
import { List, Status } from '@components';

describe('Testing List Component', () => {
    beforeEach(() => {
        // fetchMock.resetMocks();
        render(<List list={[
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
        />)
    });
    it('Show All Items in a list', async () => {
        /* fetchMock.mockResponseOnce(JSON.stringify({
            //First Data Fetch
            data: 'data'
        })); */
        const items = screen.getAllByRole('checkbox');
        expect(items).toHaveLength(3);
    })
})
