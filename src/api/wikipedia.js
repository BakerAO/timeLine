import { useState, useEffect } from 'react'

export const useWiki = (pageId) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=cirrusdoc&pageids=${pageId}&format=json`
  // const initSearch = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`

    fetch(url).then(res => res.json()).then(x => {
      let text = x?.query.pages[pageId].cirrusdoc[0].source.text
      text = text.substring(0, 1000)
      setData(text + '...')
    })
  }, [pageId])

  return data
}
