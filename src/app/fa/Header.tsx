"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [mode, setMode] = useState({
    icon: "/images/sun.png",
    bg: "#10101a",
    color: "white",
    ediv:"#111827"
  })

  function changeMode() {
    setMode(prev =>
      prev.bg === "#10101a"
        ? { icon: "/images/moon.png", bg: "#ecf0f1", color: "black", ediv:"#fce7f3" }
        : { icon: "/images/sun.png", bg: "#10101a", color: "white", ediv:"#111827" }
    )
  }

  useEffect(() => {
    const saved = localStorage.getItem("mode")
    if (saved) setMode(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode))
    document.body.style.backgroundColor = mode.bg
    document.body.style.color = mode.color
    document.querySelectorAll<HTMLElement>("#eDiv").forEach(tag => tag.style.backgroundColor = mode.ediv)
  }, [mode])

  function setUrl() {
    localStorage.setItem("language", "en")
  }

  return (
    <div className="m-5 flex items-center gap-3">
      <Image
        src={mode.icon}
        width={48}
        height={48}
        className="cursor-pointer"
        onClick={changeMode}
        alt="mode toggle"
      />
      <Link href="/" onClick={setUrl}>English</Link>
    </div>
  )
}
