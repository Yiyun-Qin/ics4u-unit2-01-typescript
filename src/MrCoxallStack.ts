/**
 * The HelloWorld program implements an application that
 * simply displays energy released question to the standard output.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

class MrCoxallStack {
  stackAsList = []

  push(pushedNumber: number): null {
    this.stackAsList.push(pushedNumber)
  }

  show(): null {
    console.log(this.stackAsList)
  }
}
export = MrCoxallStack
