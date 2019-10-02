import {useState, useEffect} from 'react'

export default function useDate(dateString) {
  const [date, setDate] = useState(new Date(dateString))

  useEffect(() => {
    setDate(new Date(dateString))
  }, [dateString])

  return date
}
