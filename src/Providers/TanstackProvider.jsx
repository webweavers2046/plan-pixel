"use client"

const { QueryClientProvider, QueryClient } = require("@tanstack/react-query");

const TanstackProvider = ({children}) => {
    const queryClient = new QueryClient()
   return(
    <QueryClientProvider client={queryClient}>
        {children}  
    </QueryClientProvider>
   )
}

export default TanstackProvider