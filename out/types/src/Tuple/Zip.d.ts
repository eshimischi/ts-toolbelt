import { Iteration, IterationOf } from '../Iteration/IterationOf';
import { Prepend } from './Prepend';
import { Next } from '../Iteration/Next';
import { Length } from './Length';
import { Pos } from '../Iteration/Pos';
import { Reverse } from './Reverse';
import { Cast } from '../Any/Cast';
import { List } from '../_Internal';
declare type _Zip<T extends List, T1 extends List, TN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Zip<T, T1, Prepend<TN, [T[Pos<I>], T1[Pos<I>]]>, Next<I>>;
    1: Reverse<TN>;
}[Pos<I> extends Length<T> ? 1 : 0];
/** Pair up the entries of **`T`** & **`T1`**
 * @param T to pair up
 * @param T1 to pair up
 * @returns **`List`**
 * @example
 */
export declare type Zip<T extends List, T1 extends List> = _Zip<T, T1> extends infer X ? Cast<X, List> : never;
export {};
