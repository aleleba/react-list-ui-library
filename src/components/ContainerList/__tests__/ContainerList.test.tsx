import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContainerList } from '@components';

describe('Testing ContainerList Component', () => {
    beforeEach(() => {
        // fetchMock.resetMocks();
        render(<ContainerList title='Test Title'/>)
    });
    it('Show Title of Container List', async () => {
        /* fetchMock.mockResponseOnce(JSON.stringify({
            //First Data Fetch
            data: 'data'
        })); */
        const title = screen.getByText('Test Title');
        expect(title).toBeInTheDocument();
    })
})
