import Reason from '@/app/(withDashboardNavbarSidebar)/dashboard/Components/ArchivedTasks/Reason'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function AreYouSureModal({type,title,id,isOpen,setIsOpen,handler}) {


  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 "
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title?title:"Are you sure?"}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      If you archive this task that will be displayed in the archive box . 
                      If you are damn sure about archiving please drop a reason below. 
                    </p>
                  </div>

                  {
                    type === "archive" &&
                  <Reason/>
                  }


                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      className="inline-flex justify-center bg-rose-100 text-rose-600 rounded-md border border-transparen px-4 py-2 text-sm font-medium  hover:bg-rose-50  hover:text-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=> setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center bg-green-100 text-green-500 rounded-md border border-transparen px-4 py-2 text-sm font-medium  hover:bg-green-50  hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>{
                        setIsOpen(false)
                        handler(id)  
                      }}
                      >
                      Yes please
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
