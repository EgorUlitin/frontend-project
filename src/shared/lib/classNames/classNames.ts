type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, v]) => v === true)
            .map(([k]) => k),
        ...additional.filter(Boolean),
    ].join(' ');
}
