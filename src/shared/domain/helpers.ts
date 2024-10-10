export function getEnumValues<T>(enumObj: { [s: string]: T } | ArrayLike<T>): Array<string> {
    return Object.values(enumObj) as Array<string>;
}