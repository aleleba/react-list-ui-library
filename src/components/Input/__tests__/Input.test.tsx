import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '@components';

describe('Testing Input Component', () => {
    beforeEach(() => {
        // fetchMock.resetMocks();
        render(<Input placeholder='Test Placeholder'/>)
    });
    it('Show right text on placeholder', async () => {
        /* fetchMock.mockResponseOnce(JSON.stringify({
            //First Data Fetch
            data: 'data'
        })); */
        const input = screen.getByPlaceholderText('Test Placeholder');
        expect(input).toBeInTheDocument();
    })
})
