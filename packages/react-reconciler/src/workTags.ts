export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText;

export const FunctionComponent = 0;
export const HostRoot = 3;
// </div>...</div>
export const HostComponent = 5;
// </div>123</div> div中的文本
export const HostText = 6;
