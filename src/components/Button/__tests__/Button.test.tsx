import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@components';

describe('Testing Button Component', () => {
    beforeEach(() => {
        // fetchMock.resetMocks();
        render(<Button />)
    });
    it('Show Button', async () => {
        /* fetchMock.mockResponseOnce(JSON.stringify({
            //First Data Fetch
            data: 'data'
        })); */
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})
