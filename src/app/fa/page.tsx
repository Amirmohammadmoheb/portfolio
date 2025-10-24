"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "./Header"

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("یک فرانت اند دولوپر")
  const [under, setUnder] = useState(".")
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    setText("")
  
    const chars = [
      "ی","ک"," ","ت","و","س","ع","ه"," ","د","ه","ن","د","ه"," ","ف","ر","ا","ن","ت"," ","ا","ن","د"
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
    if (localStorage.getItem("language") == "fa") {
      router.push("/fa")
    } else {
      console.log("سلام :)")
    }
  }, [router])



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
          <button className="
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-18
            text-white font-bold py-3 px-6 rounded-full w-52
            shadow-lg transform transition duration-1000 
            hover:scale-105 hover:shadow-2xl hover:from-pink-500 hover:to-yellow-500 md:mr-5 text-xl
          ">رزومه من را ببین</button>
        </div>
        <div>
          <h3 className="text-5xl mr-5 font-bold text-right">امیر</h3>
          <h3 className="text-5xl mr-5 font-black text-right">محب</h3>
          <h3 className="text-center text-5xl m-5 md:text-left">{under} {text}</h3>
        </div>
      </div>

      <div className="flex justify-center gap-10 flex-col-reverse m-5 lg:flex-row">
        <Image 
          src="/images/my-img.jpg" 
          alt="عکس من" 
          width={600} 
          height={400} 
          className="rounded-xl lg:w-1/2 w-full mx-auto" 
        />
        <div id="eDiv" className="bg-pink-100 rounded-2xl">
          <h3 className="text-3xl text-center">:درباره من</h3>
          <h2 className="text-right">من امیر محمد محب هستم، اصالتاً از تبریز</h2>
          <h2 className="text-right">کار میکنم react و next.js من برنامه نویس فرانت اند هستم و با</h2>
          <h2 className="text-right">من پروژه‌های جذابی می‌سازم و اگر مایل باشید می‌توانید با من تماس بگیرید</h2>
        </div>
      </div>

      <div id="eDiv" className="flex flex-col justify-center items-center pb-3">
        <div className="w-11/12">
          <h2 className="text-right">من برای اولین بار در سن ۱۰ سالگی با اسکرچ کار کردن را شروع کردم و مدتی با آن بازی ساختم. بعداً به پایتون روی آوردم و عمدتاً از آن برای توسعه ربات‌های تریدر استفاده کردم که مؤثر واقع شدند</h2>
          <h2 className="text-right">اکنون دو سال است که برنامه‌نویس فرانت‌اند وب هستم و بیشتر روی جنبه‌های ظاهری وبسایت‌ها کار می‌کنم. اغلب اوقات، خودم رابط‌های وبسایت را طراحی و پیاده‌سازی کرده‌ام</h2>
        </div>
        <div className="flex">
          <a>
            <Image src="/images/call.png" alt="call" width={64} height={64} />
          </a>
          <a>
            <Image src="/images/github.png" alt="github" width={64} height={64} />
          </a>
          <a>
            <Image src="/images/telegram.png" alt="telegram" width={64} height={64} />
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-10 flex-col-reverse m-5 lg:flex-row">
        <div id="eDiv" className="rounded-2xl lg:w-1/2 w-auto flex flex-col items-center">
          <h3 className="text-3xl text-center mb-5">:مهارت‌ها</h3>
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
          <h3 className="text-3xl text-center">:اطلاعات بیشتر درباره من</h3>
          <h2 className="text-right">سن: 15</h2>
          <h2 className="text-right">محل تولد: تبریز</h2>
          <h2 className="text-right">.بیوگرافی: برنامه‌نویس خلاق فرانت‌اند، علاقه‌مند به هنر به ویژه نقاشی و انجام پروژه‌های متنوع اسکریپت‌نویسی در پایتون به عنوان سرگرمی</h2>
        </div>
      </div>
    </>
  )
}
