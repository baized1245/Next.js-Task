import React from 'react'
import Image from 'next/image'
import chatGPTIcon from '../assets/chatgpt.png'
import cpnelIcon from '../assets/cpanel.png'
import darazIcon from '../assets/daraz.png'
import facebookIcon from '../assets/facebook_5968764.png'
import figmaIcon from '../assets/figma_5968705.png'
import fiverIcon from '../assets/fiver.png'
import gitHubIcon from '../assets/github_733609.png'
import gmailIcon from '../assets/gmail_732200.png'
import youtubeIcon from '../assets/youtube_1384060.png'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import Modal from './Modal'

const WebIcons = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 gap-6 my-4">
      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://www.youtube.com/'}>
          <Image
            src={youtubeIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">Youtube</p>
      </div>

      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://chat.openai.com/?'}>
          <Image
            src={chatGPTIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">ChatGPT</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://cpanel.net/'}>
          <Image
            src={cpnelIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">cpnel</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://www.daraz.com.bd/'}>
          <Image
            src={darazIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">Daraaz</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://www.facebook.com/home.php'}>
          <Image
            src={facebookIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">Facebook</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Link
          href={
            'https://www.figma.com/files/recents-and-sharing?fuid=1192536216112899170'
          }
        >
          <Image
            src={figmaIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">Figma</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://www.fiverr.com/'}>
          <Image
            src={fiverIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">Fiver</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://github.com/'}>
          <Image
            src={gitHubIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
        </Link>
        <p className="text-white text-sm">Github</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Link href={'https://mail.google.com/mail/u/0/#inbox'}>
          <Image
            src={gmailIcon}
            alt="Company logo"
            width={50}
            className="rounded cursor-pointer w-10 h-10"
          />
          <p className="text-white text-sm">Inbox</p>
        </Link>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        {/* <FaPlus
          onClick={() => document.getElementById('my_modal_5').showModal()}
          className="text-white cursor-pointer"
        /> */}
        <Modal />
      </div>

      {/* <Image src={cpnelIcon} alt="Company logo" width={30} /> */}
    </div>
  )
}

export default WebIcons
