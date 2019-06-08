import {NullableKeys as ONullableKeys} from '../Object/NullableKeys'
import {List} from '../_Internal'

/** Get the keys of **`T`** that are nullable
 * @param T
 * @returns **`keyof`**
 * @example
 */
export type NullableKeys<T extends List> =
    ONullableKeys<T>
