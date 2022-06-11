interface ITreeNode {
  id: number
  name: string
  children?: ITreeNode[]
}
interface IArrayItem {
  id: number
  name: string
  parentId: number
}

const arr = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
]

const convert = (arr: IArrayItem[]): ITreeNode | null => {
  //用于id和treeNode的隐射关系
  const idToTreeNode: Map<number, ITreeNode> = new Map();

  let root: ITreeNode | null = null

  arr.forEach(({ id, name, parentId }) => {
    // 先做好每个树节点，用mao做好映射关系
    const treeNode: ITreeNode = {
      id,
      name
    }
    idToTreeNode.set(id, treeNode);

    // 构建关系表
    const parentNode = idToTreeNode.get(parentId)
    if (parentNode) {
      if (parentNode.children === undefined) {
        parentNode.children = []
      }
      parentNode.children.push(treeNode)
    }

    if (parentId === 0) {
      root = treeNode
    }
  })

  return root
}

const res = convert(arr)
console.log('%c 🍗 convert(arr): ', 'font-size:20px;background-color: #E41A6A;color:#fff;', convert(arr));


export { res, IArrayItem, ITreeNode }