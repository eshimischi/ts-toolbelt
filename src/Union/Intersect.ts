/** Get the intersection of **`U1`** & **`U2`**
 * @param U1 to check similarities with
 * @param U2 to check similarities against
 * @returns **union**
 * @example
 */
export type Intersect<U1, U2> =
    U1 & U2 | U2 & U1
