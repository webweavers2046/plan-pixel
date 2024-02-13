import { AuthContext } from "@/Providers/AuthProviders";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useState } from "react";

const PaymentInfo = ({planName}) => {
  const router = useRouter()
  const xios = useAxios()
  const {user} = useContext(AuthContext)
  const [payOption, setPayOption] = useState(null);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (payOption === "sslcommarz") {
        console.log(e.target.value.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePay = async()=>{
try {
  const payInfo = {
    name: user?.displayName,
    email: user?.email,
    planName,
    currency: "BDT"
  }

  console.log(payInfo);
  const res =await xios.post('/sslPayment',payInfo)
  router.push(res.data.url);
  console.log(res);
} catch (error) {
  console.log(error);
  
}
  }
  return (
    <div>
      <button
        onClick={handlePay}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        ssl
      </button>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div>
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Please Select your prefer payment options
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li
              onClick={() => setPayOption("sslcommarz")}
              className="flex border-4"
            >
              <div className="w-full text-lg font-semibold">Stripe</div>

              <svg
                className="w-5 h-5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </li>
            <li
              onClick={() => setPayOption("stripe")}
              className="flex border-4"
            >
              <div className="w-full text-lg font-semibold">Sslcommarz</div>

              <svg
                className="w-5 h-5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default PaymentInfo;
