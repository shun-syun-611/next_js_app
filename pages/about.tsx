import Head from "next/head";
import Layout from "../src/compornents/layout";
import Seo from "../src/compornents/Seo";

export default function About() {
  return (
    <Layout title="about" description="about">
      <Seo
        pageTitle={"about"}
        pageDescription={"about description"}
        pageImg={"https://demo.com"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <p>about</p>
    </Layout>
  );
}
