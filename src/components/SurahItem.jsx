"use client";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import useFetch from "@/components/useFetch"; // Assuming you have a useFetch hook
import Loading from "@/components/Loading";
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";
import { FiMapPin, FiAlignJustify, FiType, FiHash } from "react-icons/fi";
import { IoMdText, IoIosPaper } from "react-icons/io";
const SurahPage = ({ params }) => {
  const { id } = React.use(params); // Update this line
  const { data, loading, error } = useFetch(
    `https://quran.i8x.net/api/surah/${id}`
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const versesPerPage = 8; // Number of verses per page
  const audioPerPage = 1; // Number of audio reciters per page
  const [currentAudioPage, setCurrentAudioPage] = useState(1);

  if (loading) return <Loading />;
  if (error) return <div style={{ color: "var(--error)" }}>خطأ: {error}</div>;
  if (!data || !data.result) return null;

  const {
    name,
    revelation_place,
    verses_count,
    words_count,
    verses,
    letters_count,

    audio,
  } = data.result;

  // Filter reciters based on the search term
  const filteredAudio = audio.filter((reciter) =>
    reciter.reciter.ar.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic for verses
  const indexOfLastVerse = currentPage * versesPerPage;
  const indexOfFirstVerse = indexOfLastVerse - versesPerPage;
  const currentVerses = verses.slice(indexOfFirstVerse, indexOfLastVerse);
  const totalPages = Math.ceil(verses_count / versesPerPage);

  // Pagination logic for audio
  const indexOfLastAudio = currentAudioPage * audioPerPage;
  const indexOfFirstAudio = indexOfLastAudio - audioPerPage;
  const currentAudio = filteredAudio.slice(indexOfFirstAudio, indexOfLastAudio);
  const totalAudioPages = Math.ceil(filteredAudio.length / audioPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentAudioPage(1); // Reset to first page when searching
  };

  return (
    <div className="bg-background min-h-screen py-8 px-6 text-right">
      <div className="text-center mb-12">
        <h2 className="text-verse text-2xl font-bold mb-6">{name.ar}</h2>

      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Ayat Section */}
        <div className="bg-cardBg p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">آيات السورة:</h2>
          <div className="space-y-4">
            {currentVerses.map((verse) => (
              <p key={verse.number} className="text-text text-xl inline aya">
                {verse.text.ar}
                {" , "}
                {/* <span className="text-gray-500">({verse.text.en})</span> */}
              </p>
            ))}
          </div>

          {/* Pagination for verses */}
          <div className="flex justify-between mt-4">
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
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-primary text-white"
              } rounded`}
            >
              التالي
            </button>
          </div>
        </div>

        {/* Tilawat Section */}
        <div className="bg-cardBg p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">تلاوة صوتية:</h2>

          {/* Search bar for reciters */}
          <input
            type="text"
            placeholder="ابحث عن القارئ..."
            className="mb-4 p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <div className="space-y-4">
            {currentAudio.map((reciter) => (
              <div
                key={reciter.id}
                className="flex items-center justify-between bg-cardBg shadow-md rounded-lg p-4"
              >
                <span className="text-text font-semibold">
                  {reciter.reciter.ar} - {reciter.rewaya.ar}
                </span>
                <audio controls className="flex-1 mx-4">
                  <source src={reciter.link} type="audio/mpeg" />
                  متصفحك لا يدعم مشغل الصوت.
                </audio>
              </div>
            ))}
          </div>

          {/* Pagination for audio */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() =>
                setCurrentAudioPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentAudioPage === 1}
              className={`py-2 px-4 ${
                currentAudioPage === 1 ? "bg-gray-300" : "bg-primary text-white"
              } rounded`}
            >
              السابق
            </button>
            <span className="self-center">
              صفحة {currentAudioPage} من {totalAudioPages}
            </span>
            <button
              onClick={() =>
                setCurrentAudioPage((prev) =>
                  Math.min(prev + 1, totalAudioPages)
                )
              }
              disabled={currentAudioPage === totalAudioPages}
              className={`py-2 px-4 ${
                currentAudioPage === totalAudioPages
                  ? "bg-gray-300"
                  : "bg-primary text-white"
              } rounded`}
            >
              التالي
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/surah" passHref>
          <button className="flex items-center gap-2 py-3 px-6 bg-primary text-white text-lg rounded-full hover:bg-hoverGreen transition-colors shadow-lg">
            <span>العودة إلى السور</span>
            <BiBookOpen size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SurahPage;
