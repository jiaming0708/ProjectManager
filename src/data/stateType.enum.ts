export enum StateType {
    /* 不查核 */
    None = <any>'None',
    /* 未開始 */
    WaitStart = <any>'WaitStart',
    /* 進行中 */
    Going = <any>'Going',
    /* 未完成 */
    Notyet = <any>'Notyet',
    /* 延遲完成 */
    DelayDone = <any>'DelayDone',
    /* 完成 */
    Done = <any>'Done'
}