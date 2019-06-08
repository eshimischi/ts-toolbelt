import { Equals } from '../Any/Equals';
/** Transform a **`string`** into a **`boolean`**
 * @param S to transform
 * @returns **`true`** or **`false`**
 * @example
 */
export declare type BooleanOf<S extends string> = Equals<S, string> extends true ? boolean : S extends 'false' ? false : true;
