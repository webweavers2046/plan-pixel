import MainLayout from "@/components/layout/MainLayout";
import "../styles/globals.css";
import AuthProviders from "@/Providers/AuthProviders";

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <AuthProviders>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
        </AuthProviders>
    );
};

export default MyApp;
