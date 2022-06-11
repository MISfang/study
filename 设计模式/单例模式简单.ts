class singleTon {
  private constructor() { }

  private static instance: singleTon | null

  static getInstance(): singleTon {
    if (singleTon.instance === null) {
      singleTon.instance = new singleTon();
    }
    return singleTon.instance;
  }
}

class test {
  constructor() { }
}

//@ts-nocheck
const getSingleTon = (x) => {
  let instance
  return () => {
    if (instance === null) {
      //@ts-ignore
      instance = new x();
    }
    return instance;
  }
}

const s1 = getSingleTon(test)()
const s2 = getSingleTon(test)()
console.log('%c 🥞 s1===s2: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', s1 === s2);