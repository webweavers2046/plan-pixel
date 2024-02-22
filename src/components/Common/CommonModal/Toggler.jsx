import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggler({enabled,setEnabled}) {
  

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-black' : 'bg-gray-400'}
          relative inline-flex items-center h-[16px] w-[35px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only flex items-center">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
