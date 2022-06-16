let imgList = [...document.querySelectorAll('img')]
const len = imgList.length

const imgLazyLoad = (function () {
  let count = 0

  return function () {
    let deleteIndexList: number[] = []
    imgList.forEach((img, i) => {
      let rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src!
        deleteIndexList.push(i)
        count++
        if (count === len) {
          document.removeEventListener('scroll', imgLazyLoad)
        }
      }
    })
    imgList = imgList.filter((img, i) => !deleteIndexList.includes(i))
  }
})()

document.addEventListener('scroll', imgLazyLoad)