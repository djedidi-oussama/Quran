"use client";
import AllReciters from "@/components/AllReciters";
import AllSurah from "@/components/AllSurah";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import useFetch from "@/components/useFetch";
import Loading from "@/components/Loading";

const Home = () => {
  // Fetch Surah data
  const {
    data: surahData,
    loading: surahLoading,
    error: surahError,
  } = useFetch("https://quran.i8x.net/api/surahs");

  // Fetch Reciters data
  const {
    data: reciterData,
    loading: reciterLoading,
    error: reciterError,
  } = useFetch("https://quran.i8x.net/api/audio/1");

  if (surahLoading || reciterLoading) return <Loading />;
  if (surahError || reciterError)
    return (
      <div style={{ color: "var(--error)" }} className=" text-lg text-center">
        Error: {surahError || reciterError}
      </div>
    );
  if (!surahData?.result || !reciterData?.result) return null;

  // Limit the number of displayed Surahs and Reciters to 6
  const displayedSurahs = surahData.result.slice(0, 6);
  const displayedReciters = reciterData.result.slice(0, 6);

  return (
    <div>
      <Header index={0} />
      <Hero />
      <hr className="my-6 border-gray-300" />
      <AllSurah displayedSurahs={displayedSurahs} />
      <hr className="my-6 border-gray-300" />
      <AllReciters displayedReciters={displayedReciters} />
      <hr className="my-6 border-gray-300" />
      <Footer />
    </div>
  );
};

export default Home;
