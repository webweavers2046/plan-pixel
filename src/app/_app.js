import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProviders from "@/Providers/AuthProviders";
import TaskDndProvider from "@/Providers/TaskDndProvider";



const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default MyApp;
