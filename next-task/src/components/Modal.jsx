'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaPlus } from 'react-icons/fa'

const Modal = () => {
  const [name, setName] = useState('')
  const [url, setURL] = useState('')

  const router = useRouter()

  // submit function
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!name || !url) {
  //     alert('Name and URL are required')
  //     return
  //   }
  //   try {
  //     const res = await fetch('http://localhost:3000/api/quickstart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, url }),
  //     })
  //     if (res.ok) {
  //       router.refresh()
  //       router.push('/')
  //       setName(' ')
  //       setURL(' ')
  //     } else {
  //       throw new Error('Failed to craete a shortcut')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className="relative">
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <FaPlus
        onClick={() => document.getElementById('my_modal_5').showModal()}
        size={20}
        className="text-white cursor-pointer"
      />

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-black bg-opacity-85">
          <h3 className="font-bold text-lg">Add a Shortcut</h3>
          <form>
            {/* onSubmit={handleSubmit} */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="p-1 rounded bg-slate-50 bg-opacity-30 outline-none text-wrap"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">URL</span>
              </label>
              <input
                onChange={(e) => setURL(e.target.value)}
                value={url}
                type="url"
                className="p-1 rounded bg-slate-50 bg-opacity-30 outline-none text-wrap"
                required
              />
            </div>
            <button
              className="absolute bottom-4 p-2 rounded bg-slate-50 bg-opacity-30"
              type="submit"
            >
              Add
            </button>
          </form>
          <div className="modal-action">
            {/* <button
              className=" p-2 rounded bg-slate-50 bg-opacity-30"
              type="submit"
            >
              Add
            </button> */}
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <button className=" p-2 rounded bg-slate-50 bg-opacity-30">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Modal
