import { Action } from 'shared/ReactTypes';

export interface Update<State> {
	action: Action<State>;
}

export interface UpdateQueue<State> {
	shared: {
		pending: Update<State> | null;
	};
}
// 创建代表更新的数据结构
export const createUpdate = <State>(action: Action<State>): Update<State> => {
	return {
		action
	};
};
// 创建更新队列 用于存储更新
export const createUpdateQueue = <State>() => {
	return {
		shared: {
			pending: null
		}
	} as UpdateQueue<State>;
};
// 往updateQueue.shared.pending里面添加update
export const enqueueUpdate = <State>(
	updateQueue: UpdateQueue<State>,
	update: Update<State>
) => {
	updateQueue.shared.pending = update;
};
// updateQueue消费update方法
export const processUpdateQueue = <State>(
	baseState: State,
	pendingUpdate: Update<State> | null
): { memoizedState: State } => {
	const result: ReturnType<typeof processUpdateQueue<State>> = {
		memoizedState: baseState // 新计算出的state
	};
	if (pendingUpdate !== null) {
		const action = pendingUpdate.action;
		if (action instanceof Function) {
			// baseState 1 update (x)=>4x -> memoizedState 4
			result.memoizedState = action(baseState);
		} else {
			// baseState 1 update 2 -> memoizedState 2
			result.memoizedState = action;
		}
	}
	return result;
};
