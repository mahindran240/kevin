import { useState, useEffect } from 'react'

export default function useAsync(asyncFunction, deps = []){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(()=>{
    let mounted = true
    setLoading(true)
    setError(null)
    asyncFunction()
      .then(res=>{ if(mounted) setData(res) })
      .catch(err=>{ if(mounted) setError(err) })
      .finally(()=>{ if(mounted) setLoading(false) })
    return ()=>{ mounted = false }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { loading, error, data }
}
