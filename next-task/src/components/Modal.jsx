'use client'

import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <FaPlus
        onClick={() => document.getElementById('my_modal_5').showModal()}
        size={20}
        className="text-white cursor-pointer"
      />

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-black bg-opacity-85">
          <h3 className="font-bold text-lg">Add a Shortcut</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
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
              type="url"
              className="p-1 rounded bg-slate-50 bg-opacity-30 outline-none text-wrap"
              required
            />
          </div>
          <div className="modal-action">
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
