"use client";
import React, { useState } from "react";
import useFetch from "./useFetch";
import Loading from "./Loading";

const ReciterItem = ({ params }) => {
  // State for pagination and search
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 1;
  const { id } = React.use(params);
  if (!id) {
    return <p className="text-error text-center">Reciter not found.</p>;
  }

  // Fetch Surah data
  const {
    data: surahData,
    loading: surahLoading,
    error: surahError,
  } = useFetch("https://quran.i8x.net/api/surahs");

  // Fetch and filter reciter data
  const { data, loading, error } = useFetch(
    "https://quran.i8x.net/api/surah/1"
  );

  const reciter = data?.result?.audio?.find(
    (reciter) => reciter.id === parseInt(id) // Parse `reciterId` to an integer for comparison
  );
  if (surahLoading || loading) return <Loading />;
  if (surahError || error)
    return (
      <div style={{ color: "var(--error)" }}>Error: {surahError || error}</div>
    );
  if (!reciter)
    return <p className="text-error text-center">Reciter not found.</p>;

  // Pagination logic
  const filteredSurahs =
    surahData?.result?.filter((surah) => surah.name.ar.includes(searchTerm)) ||
    [];
  const totalPages = Math.ceil(filteredSurahs.length / itemsPerPage);
  const paginatedSurahs = filteredSurahs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="min-h-screen bg-background p-6">
      {/* Reciter Information */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">
          {reciter.reciter.ar}
        </h1>
        <p className="text-lg text-text">{reciter.rewaya.ar}</p>
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="ابحث عن سورة"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-verse rounded w-full max-w-md text-right"
          style={{ backgroundColor: "var(--cardBg)", color: "var(--text)" }}
        />
      </div>

      {/* Surahs List */}
      <div className="flex justify-center mb-6 ">
        {paginatedSurahs.map((surah) => (
          <div
            key={surah.number}
            className="bg-cardBg p-4 shadow-md rounded text-center w-full max-w-md"
          >
            <h2 className="text-verse font-bold text-xl mb-3">
              {surah.name.ar}
            </h2>
            <audio controls className="w-full mt-3">
              <source
                src={surah.number < 10 ? `${reciter.server}/00${surah.number}.mp3` : surah.number < 100 ? `${reciter.server}/0${surah.number}.mp3` : `${reciter.server}/${surah.number}.mp3`}
                type="audio/mpeg"
              />
              متصفحك لا يدعم تشغيل الصوت.
            </audio>
          </div>
        ))}
      </div>
      {/* Pagination for verses */}
      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`py-2 px-4 ${
            currentPage === 1 ? "bg-gray-300" : "bg-primary text-white"
          } rounded`}
        >
          السابق
        </button>
        <span className="self-center">
          صفحة {currentPage} من {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`py-2 px-4 ${
            currentPage === totalPages ? "bg-gray-300" : "bg-primary text-white"
          } rounded`}
        >
          التالي
        </button>
      </div>
    </section>
  );
};

export default ReciterItem;
