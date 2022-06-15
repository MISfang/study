const tree: Item[] = [
  {
    name: '河南',
    id: 10,
    children: [
      {
        name: '郑州',
        id: 11,
        children: [
          {
            name: '金水区',
            id: 50,
            children: [
              {
                name: '西华县',
                id: 50,
                children: [
                  {
                    name: '黄泛区',
                    id: 50
                  },
                  {
                    name: '方庄',
                    id: 50
                  }
                ]
              },
              {
                name: '商水县',
                id: 50
              },
              {
                name: '扶沟县',
                id: 50
              }
            ]
          },
          {
            name: '河西区',
            id: 50
          }
        ]
      },
      {
        name: '开封',
        id: 11,
        children: [
          {
            name: '山水区',
            id: 50
          },
          {
            name: '自贸区',
            id: 50
          }
        ]
      },
      {
        name: '周口',
        id: 11,
      }
    ]
  }
]
interface Item {
  name: string,
  id: number,
  children?: Item[]
}

// 用回溯算法
const find = (target: string, tree: Item[]): string | string[] => {
  let res: string[] = [];
  const dfs = (list: Item[], path: string[]) => {
    for (let i = 0; i < list.length; i++) {
      const { name, id, children } = list[i]
      path.push(`${id}-${name}`)
      if (name === target) {
        res = path
        return
      }
      children && dfs(children, [...path])
      path.pop()
    }
  }
  dfs(tree, [])
  return !res.length ? '不存在' : res
}
// const find = (target: string, tree: Item[]): string[] | string => {
//   let res: string[] = [];
//   const dfs = (nodeList: Item[], path: string[]) => {
//     for (let i = 0; i < nodeList.length; i++) {
//       const { name, children } = nodeList[i];
//       path.push(name);
//       if (name === target) {
//         res = path
//         return
//       }
//       children && dfs(children, [...path]);
//       path.pop()
//     }
//   }
//   dfs(tree, [])
//   return !res.length ? 'target不存在!' : res
// }

const res = find('黄泛区', tree)
console.log('%c 🍜 res: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', res);













export { }