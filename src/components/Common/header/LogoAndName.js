"use client"

const LogoAndName = () => {
  return (
    <div>
      <a
        href="https://flowbite.com/"
        className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* Uncomment this block when you have the Image component properly configured. */}
        {/* <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}

        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          PlanPixel
        </span>
      </a>
    </div>
  );
};

export default LogoAndName;
