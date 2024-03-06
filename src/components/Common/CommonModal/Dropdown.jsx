
export default function Dropdown({ setSelectedTask, task, handleUpdate, setIsOpen, handleDeleteTask, id }) {

  return (
    <div className="absolute top-10 border shadow-lg rounded-md z-40 w-56 text-right bg-white">
      <button
        onClick={() => handleUpdate(id)}
        className={`hover:bg-[#f7f7f7] hover:text-black text-gray-900 group flex w-full items-center  px-2 py-2 text-sm  border-b`}
      >
        <EditActiveIcon
          className="mr-2 h-5 w-5"
          aria-hidden="true"
        />
        Edit
      </button>
      <button
        onClick={() => {
          setIsOpen(true)
          setSelectedTask(task)
        }}
        className={`hover:bg-[#f7f7f7] hover:text-black text-gray-900 group flex w-full items-center  px-2 py-2 text-sm border-b`}
      >
        <ArchiveActiveIcon
          className="mr-2 h-5 w-5"
          aria-hidden="true"
        />
        Archive
      </button>
      <button
         onClick={() => handleDeleteTask(id)}
        className={`hover:bg-[#f7f7f7] hover:text-black text-gray-900 group flex w-full items-center  px-2 py-2 text-sm`}
      >
        <DeleteActiveIcon
          className="mr-2 h-5 w-5"
          aria-hidden="true"
        />
        Delete
      </button>
    </div>
  )
}


function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#000" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#000" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#000" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#000" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#000" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#000" strokeWidth="
  
  2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#000"
        stroke="#000"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#000" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#000" strokeWidth="2" />
    </svg>
  );
}