export enum StateType {
    /* 不查核 */
    None = 0,
    /* 未開始 */
    WaitStart = 1,
    /* 進行中 */
    Going =2,
    /* 未完成 */
    Notyet = 3,
    /* 延遲完成 */
    DelayDone = 4,
    /* 完成 */
    Done = 5
}