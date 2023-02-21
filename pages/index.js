import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Head from "next/head";

export default function Home() {
  return (
    <>
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
      <Header />
      <Overview />
      <Footer />
    </>
  );
}
