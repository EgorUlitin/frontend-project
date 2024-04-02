import { classNames } from './classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('app')).toBe('app');
    });
    test('with two params', () => {
        const expected = 'app isDisable';
        expect(classNames('app', { isDisable: true })).toBe(expected);
    });
    test('with all params', () => {
        const expected = 'app isDisable hover ligth';
        expect(
            classNames('app', { isDisable: true, hover: true }, ['ligth']),
        ).toBe(expected);
    });
    test('with one mod is false', () => {
        const expected = 'app isDisable ligth';
        expect(
            classNames('app', { isDisable: true, hover: false }, ['ligth']),
        ).toBe(expected);
    });
    test('with one mod is undefined', () => {
        const expected = 'app hover ligth';
        expect(
            classNames('app', { isDisable: undefined, hover: true }, ['ligth']),
        ).toBe(expected);
    });
});
