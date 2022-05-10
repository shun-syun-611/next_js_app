import Head from "next/head";
import Layout from "../src/compornents/layout";
import Seo from "../src/compornents/Seo";

export default function Contact() {
  return (
    <Layout title="contact" description="contact">
      <Seo
        pageTitle={"contact"}
        pageDescription={"contact description"}
        pageImg={"https://demo.com"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <p>contact</p>
    </Layout>
  );
}
