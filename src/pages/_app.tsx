import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document !== undefined) {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  );
}
