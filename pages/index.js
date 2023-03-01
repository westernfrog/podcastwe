import EditorPick from "@/components/EditorPick";
import News from "@/components/News";
import Newsletter from "@/components/Newsletter";
import Overview from "@/components/Overview";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <>
      <Overview />
      <News />
      <Newsletter />
      <Trending />
      <EditorPick />
    </>
  );
}
