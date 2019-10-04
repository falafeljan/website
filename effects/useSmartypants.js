import {useState, useEffect} from 'react'
import smartypants from 'smartypants'

export default function useSmartypants(source) {
  const [body, setBody] = useState(smartypants(source, 2))

  useEffect(() => {
    setBody(smartypants(source, 2))
  }, [source])

  return body
}
