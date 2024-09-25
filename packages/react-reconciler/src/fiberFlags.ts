export type Flags = number;
export const NoFlags = 0b0000001;
export const Placement = 0b0000010; // 与结构相关
export const Update = 0b0000100; // 与属性相关 如：<div title='111'>1</div> -> <div title='222'>1</div>
export const ChildDeletion = 0b0001000; // 与结构相关
