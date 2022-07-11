// vue2中对array没发监听的处理办法，对数组方法进行拦截
const arrayProto=Array.prototype
export const arrayMethods=Object.create(arrayProto)
const methodsToPatch=['push','pop','shift','unshift','splice','sort','reverse']
methodsToPatch.forEach(name=>{
    const method=arrayProto[name]
    Object.defineProperty(arrayMethods,name,{
        enumerable:false,
        configurable:true,
        writable:true,
        value:function(...args){
            const res=method.apply(this,args)
            return res
        }
    })
})