import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar/ui/Sidebar/Sidebar';
import {
    helperWithTranslation,
} from 'shared/lib/tests/helperWithTranslation/helperWithTranslation';

describe('Sidebar', () => {
    test('just render', () => {
        helperWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test switching sidebar', () => {
        helperWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
