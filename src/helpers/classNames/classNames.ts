type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[],
): string {
  return [
    cls,
    Object.entries(mods)
      .filter(([k, v]) => v === true)
      .map(([k, v]) => k),
    ...additional,
  ].join(' ');
}
