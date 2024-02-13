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

const WebIcons = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 gap-6 my-4">
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={youtubeIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">Youtube</p>
      </div>

      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={chatGPTIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">ChatGPT</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={cpnelIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">cpnel</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={darazIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">Daraaz</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={facebookIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">Facebook</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={figmaIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">Figma</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={fiverIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">Fiver</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={gitHubIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">Github</p>
      </div>
      <div className="rounded flex flex-col items-center justify-center">
        <Image
          src={gmailIcon}
          alt="Company logo"
          width={50}
          className="rounded cursor-pointer w-10 h-10"
        />
        <p className="text-white text-sm">Inbox</p>
      </div>

      {/* <Image src={cpnelIcon} alt="Company logo" width={30} /> */}
    </div>
  )
}

export default WebIcons
