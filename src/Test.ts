import {Repeat} from './List/Repeat'
import {Equals} from './Any/Equals'
import {Compute} from './Any/Compute'
import {True, False, Boolean} from './Boolean/Boolean'

/**
 * Test should pass
 */
export type Pass = True

/**
 * Test should fail
 */
export type Fail = False

/**
 * Check or test the validity of a type
 *
 * @example
 * ```ts
 * // see in `tst` folder
 * ```
 *
 * @param debug to debug with parameter hints (`ctrl+p`, `ctrl+shift+space`)
 */
export declare function check<Type, Expect, Outcome extends Boolean>(debug?: Compute<Type>): Equals<Equals<Type, Expect>, Outcome>

/**
 * Validates a batch of [[check]]
 *
 * @example
 * ```ts
 * // see in `tst` folder
 * ```
 *
 * @param checks a batch of [[check]]
 */
export declare function checks(checks: Partial<Repeat<Pass, '30'>>): void;
