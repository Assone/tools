export type FunctionParameters<T extends Function> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

export type FunctionReturn<T extends Function> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
