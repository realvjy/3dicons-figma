import Fuse from 'fuse.js'
import * as React from "react";
const { allicons } = require("../lol");


function useSearch(query: string) {
  const [results, setResults] = React.useState(Object.values(allicons))

  const fuse = new Fuse(Object.values(allicons), {
    threshold: 0.2,
    keys: ['keywords', 'icons']
  })


  React.useEffect(() => {
    if (query.trim()) {
      setResults(fuse.search(query.trim()))
    } else {
      setResults(Object.values(allicons))
    }
  }, [query])

  return results
}

export default useSearch
