import React from 'react'
import { GoSearch } from 'react-icons/go'

const Searchbar = () => {
  return (
    <div className="flex items-center mx-auto relative mt-4 md:mt-10">
      <GoSearch className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        className="pl-10 pr-4 py-2 rounded-full bg-slate-50 bg-opacity-30 outline-none"
        type="text"
        placeholder="Search the web"
        name=""
        id=""
      />
    </div>
  )
}

export default Searchbar
