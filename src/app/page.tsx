"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "./Header"

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")
  const [under, setUnder] = useState(".")
  
  useEffect(() => {
    if (localStorage.getItem("language") == "fa") {
      router.push("/fa")
    } else {
      console.log("hello :)")
    }
  }, [router])

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []
    setText("")
  
    const chars = [
      "a"," ","f","r","o","n","t","-","e","n","d"," ",
      "d","e","v","e","l","o","p","e","r"
    ]
  
    chars.forEach((char, i) => {
      const timeout = setTimeout(() => {
        setText(prev => prev + char)
      }, i * 100)
      timeouts.push(timeout)
    })
  
    return () => {
      timeouts.forEach(t => clearTimeout(t))
    }
  }, [])
  

  useEffect(() => {
    const interval = setInterval(() => setUnder(prev => prev === "." ? "|" : "."), 500)
    return () => clearInterval(interval)
  }, [])

  function Skill(props: { name: string }) {
    return (
      <div className="w-24">
        <div className="w-24 h-24 flex justify-center items-center">
          <Image 
            src={`/images/${props.name}.png`} 
            alt={props.name} 
            width={96} 
            height={96} 
            className="w-24"
          />
        </div>
        <h3 className="text-center text-2xl">{props.name}</h3>
      </div>
    )
  }

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex flex-col justify-center items-center md:justify-between md:flex-row">
        <div>
          <h3 className="text-5xl ml-5 font-bold">Amir</h3>
          <h3 className="text-5xl ml-5 font-black">Moheb</h3>
          <h3 className="text-center text-5xl m-5 md:text-left">{text} {under}</h3>
        </div>
        <div>
          <button className="
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-18
            text-white font-bold py-3 px-6 rounded-full w-52
            shadow-lg transform transition duration-1000 
            hover:scale-105 hover:shadow-2xl hover:from-pink-500 hover:to-yellow-500 md:mr-5 text-xl
          ">See my resume</button>
        </div>
      </div>

      <div className="flex justify-center gap-10 flex-col-reverse m-5 lg:flex-row">
        <Image 
          src="/images/my-img.jpg" 
          alt="My photo" 
          width={600} 
          height={400} 
          className="rounded-xl lg:w-1/2 w-full mx-auto" 
        />
        <div id="eDiv" className="bg-pink-100 rounded-2xl">
          <h3 className="text-3xl text-center">About me:</h3>
          <h2>I am Amir Mohammad Moheb, originally from Tabriz.</h2>
          <h2>I am a front-end developer who works on my projects using React and Next.js.</h2>
          <h2>I create exciting projects, and if you like, you can get in touch with me.</h2>
        </div>
      </div>

      <div id="eDiv" className="flex flex-col justify-center items-center pb-3">
        <div className="w-11/12">
          <h2>I first started working with Scratch at the age of 10 and spent some time creating games with it. Later, I moved on to Python and mostly used it to develop trading bots, which proved to be effective.</h2>
          <h2>I have now been a front-end web developer for two years, primarily working on the visual aspects of websites. Most of the time, I have been designing and building website interfaces on my own.</h2>
        </div>
        <div className="flex">
          <a>
            <Image src="/images/call.png" alt="Call" width={64} height={64} />
          </a>
          <a>
            <Image src="/images/github.png" alt="GitHub" width={64} height={64} />
          </a>
          <a>
            <Image src="/images/telegram.png" alt="Telegram" width={64} height={64} />
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-10 flex-col-reverse m-5 lg:flex-row">
        <div id="eDiv" className="rounded-2xl lg:w-1/2 w-auto flex flex-col items-center">
          <h3 className="text-3xl text-center">Skills:</h3>
          <div className="flex gap-5 flex-wrap justify-center">
            <Skill name="Python"/>
            <Skill name="HTML"/>
            <Skill name="CSS"/>
            <Skill name="JS"/>
            <Skill name="React"/>
            <Skill name="TypeScript"/>
            <Skill name="Next.js"/>
            <Skill name="Tailwind"/>
            <Skill name="GIT"/>
          </div>
        </div>
        <div id="eDiv" className="rounded-2xl lg:w-1/2 w-auto">
          <h3 className="text-3xl text-center">More about me:</h3>
          <h2>Age: 15</h2>
          <h2>Birthplace: Tabriz</h2>
          <h2>Biography: Creative front-end developer, interested in art—especially painting—and enjoys various scripting projects in Python as a hobby.</h2>
        </div>
      </div>
    </>
  )
}
