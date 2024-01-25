import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
};

export default MyApp;
