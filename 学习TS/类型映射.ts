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


const typeStr = ['name', 'age', 'manager'].join(' | ')
console.log('%c 🌯 typeStr: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', typeStr);
type strList = 'name' | 'age' | 'manager'
type boolList = 'isStudent' | 'sex'

type obj = {
  [key in strList]: string
  [value in boolList]: boolean
}