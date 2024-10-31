"use client";
import React from "react";
import useFetch from "@/components/useFetch";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllReciters from "@/components/AllReciters";
function page() {
  // Fetch Reciters data
  const {
    data: reciterData,
    loading: reciterLoading,
    error: reciterError,
  } = useFetch("https://quran.i8x.net/api/audio/1");

  if (reciterLoading) return <Loading />;
  if (reciterError)
    return <div style={{ color: "var(--error)" }}>Error: {error}</div>;
  if (!reciterData || !reciterData.result) return null;

  // Limit the number of displayed Surahs to 6
  const displayedReciters = reciterData.result;
  return (
    <div>
      <Header index={2} />
      <AllReciters displayedReciters={displayedReciters} />
      <Footer />
    </div>
  );
}

export default page;
