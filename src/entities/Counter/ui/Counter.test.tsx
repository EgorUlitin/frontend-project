import { fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from '..';

describe('Counter', () => {
    test('just render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('test increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId('increment-btn');
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        // fireEvent.click(incrementBtn);
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('test decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrementBtn = screen.getByTestId('decrement-btn');
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        // fireEvent.click(incrementBtn);
        userEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
