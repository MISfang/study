interface IJsonpParams {
  url: string;
  params: {
    [ket: string]: any
  },
  cbName: string;
}

const JSONP = ({ url, params = {}, cbName }: IJsonpParams) => {
  const handleUrl = () => {
    let url2 = '';
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        url2 += `${key}${params[key]}`
      }
    }
    url2 += `cb="${cbName}`
    return `${url}?${url2}`
  }
  return new Promise<any>((resolve, reject) => {
    const scriptEle = document.createElement('script')
    scriptEle.src = handleUrl()
    document.body.appendChild(scriptEle)
    window[cbName] = (data) => {
      resolve(data)
      document.removeChild(scriptEle)
    }
  })
}