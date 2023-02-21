import Header from "@/components/Header";
import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <title>PodcastWe</title>
        <meta
          name="description"
          content="Discover and listen to the latest podcasts on PodcastWe. Our platform offers a vast collection of shows covering various topics, from news and entertainment to education and technology. Join our community of podcast lovers and never miss an episode. Download PodcastWe today and start exploring the world of audio content."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/9758/9758592.png"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
      <Script src="https://rawcdn.githack.com/kousik19/foto.js/d604b02c69b6f037875bc4a3050b85d776dc4659/foto.js"></Script>
      <Script
        src="https://kit.fontawesome.com/5818d7bece.js"
        crossorigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
