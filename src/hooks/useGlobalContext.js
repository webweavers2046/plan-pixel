const { globalContext } = require("@/Providers/globalContext")
const { useContext } = require("react")

const useGlobalContext = () => {
    return useContext(globalContext)
}

export default useGlobalContext;