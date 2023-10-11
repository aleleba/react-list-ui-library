import React from 'react';
import { render, screen } from '@testing-library/react';
import { Item, Status } from '@components';

describe('<App/> Component', () => {
    beforeEach(() => {
        // fetchMock.resetMocks();
        render(<Item name='Item Test' status={Status.DONE} handleChange={ () => {}} />)
    });
    it('Show Item Name', async () => {
        /* fetchMock.mockResponseOnce(JSON.stringify({
            //First Data Fetch
            data: 'data'
        })); */
        screen.getByText('Item Test')
    })
})
