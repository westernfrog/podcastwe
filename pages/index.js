import EditorPick from "@/components/EditorPick";
import Footer from "@/components/Footer";
import News from "@/components/News";
import Overview from "@/components/Overview";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <>
      <Overview />
      <News />
      <Trending />
      <EditorPick />
      <Footer />
    </>
  );
}
