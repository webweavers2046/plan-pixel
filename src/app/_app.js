import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProviders from "@/providers/AuthProviders";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <QueryClientProvider client={queryClient}>
            <AuthProviders>
                <Hydrate state={pageProps.dehydratedState}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </Hydrate>
            </AuthProviders>
        </QueryClientProvider>
    );
};

export default MyApp;
