"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WhatsAppButton() {
  const [messageVisible, setMessageVisible] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setMessageVisible(true), 5000),
      setTimeout(() => setMessageVisible(false), 15000),
      setTimeout(() => setMessageVisible(true), 25000),
      setTimeout(() => setAlertVisible(true), 15000),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  const handleMessageClick = () => setMessageVisible(false)

  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=5571988089662&text=" +
    encodeURIComponent("Oi! Preciso de um orçamento para transporte executivo. Pode me ajudar?")

  return (
    <>
      <Link
        href={whatsappUrl}
        target="_blank"
        className="fixed right-6 bottom-10 z-[100] w-[60px] h-[60px]"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          className="rounded-lg"
        />
      </Link>

      {alertVisible && (
        <span className="fixed right-[30px] bottom-[90px] z-[101] w-[17px] h-[17px] bg-red-600 text-white text-[11px] font-bold text-center leading-[normal] rounded-full">
          1
        </span>
      )}

      {messageVisible && (
        <button
          onClick={handleMessageClick}
          className="fixed right-[90px] bottom-[52px] z-[100] w-[200px] h-[32px] bg-white text-black border border-gray-300 text-[13px] text-center leading-[31px] rounded-full cursor-pointer"
        >
          Fale conosco pelo WhatsApp
        </button>
      )}
    </>
  )
}
