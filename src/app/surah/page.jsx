"use client";
import React from "react";
import useFetch from "@/components/useFetch";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllSurah from "@/components/AllSurah";
function page() {
  const { data, loading, error } = useFetch("https://quran.i8x.net/api/surahs");

  if (loading) return <Loading />;
  if (error) return <div style={{ color: "var(--error)" }}>Error: {error}</div>;
  if (!data || !data.result) return null;

  // Limit the number of displayed Surahs to 6
  const displayedSurahs = data.result;
  return (
    <div>
        <Header index={1} />
        <AllSurah displayedSurahs={displayedSurahs} />
        <Footer />
    </div>
  );
}

export default page;
