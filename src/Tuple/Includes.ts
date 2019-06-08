import {Match} from '../Any/_Internal'
import {Includes as OIncludes} from '../Object/Includes'
import {List} from '../_Internal'

/** Check whether **`T`** has entries that match **`M`**
 * @param T to be inspected
 * @param M to check entry type
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 */
export type Includes<T extends List, M extends any, match extends Match = 'default'> =
    OIncludes<T, M, match>
