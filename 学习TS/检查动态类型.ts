interface userinfo {
    name:string,
    age:string,
    value?:number
}

const userInfo:userinfo={
    name:'000',
    age:'111'
}

const getValues=<T,K extends keyof T>(obj:T,keys:K[])=>{
    return keys.map(key=>obj[key])
}

getValues(userInfo,['value'])