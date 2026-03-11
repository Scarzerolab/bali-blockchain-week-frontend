"use client"
import { useEffect, useState } from "react"

export function useLowPerf() {
  const [lowPerf, setLowPerf] = useState(false)

  useEffect(() => {

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cores = navigator.hardwareConcurrency || 8; 
    const ram = (navigator as any).deviceMemory || 8; 

    if (prefersReducedMotion || cores <= 4 || ram <= 3) {
      setLowPerf(true)
    }
  }, [])

  return lowPerf
}