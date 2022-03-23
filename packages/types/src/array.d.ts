export type Head<T> = T extends [infer U, ...any[]] ? U : never;

export type Tail<T> = T extends [...any[], infer U] ? U : never;

export type HasTail<T> = T extends [] ? false : true;

export type Length<T extends any[]> = T["length"];
