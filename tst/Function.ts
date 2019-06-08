/* eslint-disable fp/no-class */
/* eslint-disable no-implicit-coercion */
import {Test, F} from '../src/index'
import {Arrow} from '../src/Function/Arrow'
import {Curry, Gap} from '../src/Function/Curry'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// FUNCTION //////////////////////////////////////////////////////////////////////////////

const FN = (a: string, b: number, c: object) => true

// ---------------------------------------------------------------------------------------
// ARROW

checks([
    check<F.Arrow<[string, number, object], boolean>,   typeof FN,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CLASSOF

checks([
    check<F.ClassOf<typeof FN>, new(a: string, b: number, c: object) => boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPOSE

declare function compose<Fns extends any[]>(...args: F.Composer<Fns>): F.ReturnOf<F.Compose<Fns>>

const composed = compose(
    (message: string)                   => ({}),                    // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (name: string, age: number)         => ({name, age}),           // receive parameters
)

checks([
    check<(typeof composed),    (name: string, age: number) => {},  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CURRY

// Not testable
declare function curry<F extends Arrow>(f: F): Curry<F>

const __ = {} as Gap

const toCurry = (name: string, age: number, single: true, ...nicknames: string[]) => true
const curried = curry(toCurry)

const test00 = curried(__, 26)(__, true, 'JJ', __)('Jane', 'Jini') // boolean
const test01 = curried('Jane', 26, true, __)('JJ', __)('Jini')     // boolean

checks([
    check<typeof test00,        boolean,                                Test.Pass>(),
    check<typeof test01,        boolean,                                Test.Pass>(),
])


// ---------------------------------------------------------------------------------------
// PARAMSOF

checks([
    check<F.ParamsOf<typeof FN>,    [string, number, object],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PIPE

declare function pipe<Fns extends any[]>(...args: F.Piper<Fns>): F.ReturnOf<F.Pipe<Fns>>

const piped = pipe(
    (name: string, age: number)         => ({name, age}),           // receive parameters
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                   => ({}),                    // receive previous return
)

checks([
    check<(typeof piped),   (name: string, age: number) => {},  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RETURNOF

checks([
    check<F.ReturnOf<typeof FN>,    boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNCURRY

// checks([
//     check<F.UnCurry<F.Curry<typeof FN>>,    typeof FN,  Test.Pass>(),
// ])
