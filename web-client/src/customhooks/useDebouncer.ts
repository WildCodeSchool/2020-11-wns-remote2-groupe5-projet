import { useRef } from 'react'

const useDebouncer = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setDebouncer = (ms: number, cb: () => void) => {
    cancelDebouncer()
    timer.current = setTimeout(cb, ms)
  }

  const cancelDebouncer = () => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }

  return {
    setDebouncer,
    cancelDebouncer,
  }
}

export default useDebouncer
