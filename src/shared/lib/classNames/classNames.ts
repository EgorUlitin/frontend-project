export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, v]) => v === true)
            .map(([k]) => k),
        ...additional.filter(Boolean),
    ].join(' ');
}
