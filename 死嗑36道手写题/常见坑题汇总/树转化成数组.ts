import { res, IArrayItem, ITreeNode } from './把数组转成树'

const treeNode = res
const convert2 = (root: ITreeNode): IArrayItem[] | null => {
  const nodeToParent = new Map()
  let arr: IArrayItem[] = []

  // 做广度优先遍历
  const tempArr: ITreeNode[] = []
  tempArr.push(root)
  while (tempArr.length > 0) {
    const currentNode = tempArr.shift()
    if (currentNode === undefined) {
      break
    }
    const { id, name, children = [] } = currentNode
    const parentNode = nodeToParent.get(currentNode)
    const parentId = parentNode?.id || 0

    const currentItem: IArrayItem = {
      id,
      name,
      parentId,
    }
    arr.push(currentItem)

    children.forEach(child => {
      nodeToParent.set(child, currentNode)
      tempArr.push(child)
    })
  }
  return arr
}

console.log('%c 🧀 convert2(treeNode): ', 'font-size:20px;background-color: #42b983;color:#fff;', convert2(treeNode!));
