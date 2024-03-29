import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Hydrate state={pageProps.dehydratedState}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Toaster />
    </Hydrate>
  );
};

export default MyApp;
