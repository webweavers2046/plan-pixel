"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";



const TanstackProvider = ({children}) => {
    const queryClient = new QueryClient()
    // const [queryClient] = useState(new QueryClient())
   return (
     <QueryClientProvider client={queryClient} contextSharing={true}>
       {children}
     </QueryClientProvider>
   );
}

export default TanstackProvider