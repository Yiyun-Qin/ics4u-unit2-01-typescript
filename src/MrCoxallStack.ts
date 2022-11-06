/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

class MrCoxallStack {
  /**
   * The list that contains the number inputted.
   *
   */
  stackAsList: number[] = []

  /**
   * The push() function.
   *
   * @param {number} pushedNumber The number inputted from the user
   */
  pushItem(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  /**
   * The show() function.
   *
   */
  show(): void {
    console.log(this.stackAsList)
  }
}
export = MrCoxallStack
