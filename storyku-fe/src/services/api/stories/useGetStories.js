import axios from "axios"
import { useEffect, useState } from "react"

const BASE_API = import.meta.env.VITE_APP_BASE_API

const useGetStories = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_API}/stories`)
        if (!response) throw new Error("Network Response Error")        
        setData(response.data.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export default useGetStories