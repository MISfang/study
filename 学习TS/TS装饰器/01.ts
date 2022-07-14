const decWithOutParams = (targetClass: any) => {
    const test = {
        name: 'fang',
        age: 21
    }
    const demo = new targetClass(test)
    demo.say()
    console.log('%c 🎂 targetClass: ', 'font-size:20px;background-color: #FCA650;color:#fff;', targetClass);
}

const decWithParams=(ID:number)=>{
    return (target:any)=>{
        const test2={
            name:'诡术妖姬',
            age:666
        }
        const demo= new target(test2)
        demo.sayId(ID)
    }
}

@decWithOutParams
@decWithParams(23456)





class student {
    name: string;
    age: number;
    constructor({ name, age }) {
        this.age = age;
        this.name = name;
    }
    say() {
        const { age, name } = this
        console.log('%c 🍡 `你好啊！${name}${age}`: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', `你好啊！${name}${age}`);
    }
    sayId(id:number){
        console.log('%c 🍮 `我的银行卡密码是${id}`: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', `我的银行卡密码是${id}`);
    }
}
