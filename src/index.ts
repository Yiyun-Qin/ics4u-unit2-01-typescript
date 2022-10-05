/**
 * The HelloWorld program implements an application that
 * simply displays energy released question to the standard output.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

import MrCoxallStack from './MrCoxallStack'

newStack = new MrCoxallStack()

const passedNumber = prompt('Enter an integer: ')
newStack.push(passedNumber)
