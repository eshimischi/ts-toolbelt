/** Get the instance type of a **`class`** from a class object
 * @param C **`typeof`** **`class`**
 * @returns **`class`**
 * @example
 */
export type InstanceOf<C extends new (...args: any) => any> =
    InstanceType<C>
