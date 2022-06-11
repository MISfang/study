interface IUser {
  name: string;
  password: string;
  age: number;
  address: string;
}

type FPartial<T> = {
  [k in keyof T]?: T[k]
}
type FRequired<T> = {
  [k in keyof T]-?: T[k]
}
type TPartailUser = FRequired<IUser>