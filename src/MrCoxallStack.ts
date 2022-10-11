/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

class MrCoxallStack {
  stackAsList: number[] = []

  pushItem(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  show(): void {
    console.log(this.stackAsList)
  }
}
export = MrCoxallStack
