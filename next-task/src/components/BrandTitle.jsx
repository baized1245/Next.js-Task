import Image from 'next/image'
import React from 'react'
import microsoftIcon from '../assets/microsoft.png'
import Searchbar from './Searchbar'

const BrandTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 md:pt-72">
      <div className="flex items-center justify-center space-x-3 mx-auto">
        <Image src={microsoftIcon} alt="Company logo" width={30} />
        <h1 className="text-center text-3xl font-bold text-white my-auto">
          Microsoft
        </h1>
      </div>
      <Searchbar />
    </div>
  )
}

export default BrandTitle
