import { Match } from '../Any/_Internal';
import { Has as OHas } from '../Object/Has';
import { List } from '../_Internal';
/** Check whether **`T`** has a entry of key **`K`** that matches **`M`**
 * @param T to be inspected
 * @param K to choose entry
 * @param M to check entry type (?=`any`)
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type Has<T extends List, K extends string, M extends any = any, match extends Match = 'default'> = OHas<T, K, M, match>;
