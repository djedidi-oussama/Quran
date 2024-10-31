"use client";
import React, { useState } from "react";
import { BiBookOpen } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";
import { FiMapPin, FiAlignJustify, FiType, FiHash } from "react-icons/fi";
import { IoMdText, IoIosPaper } from "react-icons/io";
import Link from "next/link";

const AllSurah = ({ displayedSurahs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const surahsPerPage = 6;

  // Filter surahs based on the search term
  const filteredSurahs = displayedSurahs.filter((surah) =>
    surah.name.ar.includes(searchTerm)
  );

  // Calculate the indices for the displayed surahs on the current page
  const indexOfLastSurah = currentPage * surahsPerPage;
  const indexOfFirstSurah = indexOfLastSurah - surahsPerPage;
  const currentSurahs = filteredSurahs.slice(
    indexOfFirstSurah,
    indexOfLastSurah
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredSurahs.length / surahsPerPage);

  // Functions to navigate between pages
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-background min-h-screen py-8 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">قائمة السور</h1>
        <p className="text-lg text-text">تصفح قائمة من السور المختارة</p>
      </div>

      {/* Search Input */}

      {displayedSurahs.length > surahsPerPage && (
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="ابحث عن سورة"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on new search
            }}
            className="p-2 border border-verse rounded w-full max-w-md text-right"
            style={{ backgroundColor: "var(--cardBg)", color: "var(--text)" }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSurahs.map((surah) => (
          <div
            key={surah.number}
            className="bg-cardBg shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl text-center"
          >
            <h2 className="text-verse text-2xl font-bold mb-3">
              {surah.name.ar}
            </h2>

            <div className="text-left space-y-2">
              <p className="flex items-center text-text font-medium">
                <IoMdText className="mr-3 text-primary" size={20} />
                <span className="font-semibold mr-1">الاسم الإنجليزي:</span>
                <span className="ml-1">{surah.name.en}</span>
              </p>
              <p className="flex items-center text-text font-medium">
                <FiType className="mr-3 text-primary" size={20} />
                <span className="font-semibold mr-1">التنطق:</span>
                <span className="ml-1">{surah.name.transliteration}</span>
              </p>
              <p className="flex items-center text-text font-medium">
                <FiMapPin className="mr-3 text-primary" size={20} />
                <span className="font-semibold mr-1">مكان النزول:</span>
                <span className="ml-1">{surah.revelation_place.ar}</span>
              </p>
              <p className="flex items-center text-text font-medium">
                <FiAlignJustify className="mr-3 text-primary" size={20} />
                <span className="font-semibold mr-1">عدد الآيات:</span>
                <span className="ml-1">{surah.verses_count}</span>
              </p>
              <p className="flex items-center text-text font-medium">
                <IoIosPaper className="mr-3 text-primary" size={20} />
                <span className="font-semibold mr-1">عدد الكلمات:</span>
                <span className="ml-1">{surah.words_count}</span>
              </p>
              <p className="flex items-center text-text font-medium mb-3">
                <FiHash className="mr-3 text-primary" size={20} />
                <span className="font-semibold mr-1">عدد الحروف:</span>
                <span className="ml-1">{surah.letters_count}</span>
              </p>
            </div>

            <Link href={`/surah/${surah.number}`} passHref>
              <button className="w-full flex items-center justify-center gap-2 py-2 mt-2 px-4 bg-primary text-white rounded-full hover:bg-hoverGreen transition-colors font-bold">
                <span>عرض السورة</span>
                <BiBookOpen size={18} />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {displayedSurahs.length > surahsPerPage && (
        <div className="flex justify-center mt-12 gap-4">
          <button
            onClick={goToPreviousPage}
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
            onClick={goToNextPage}
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
      )}

      {/* Button to See All Surahs */}
      {displayedSurahs.length <= surahsPerPage && (
        <div className="flex justify-center mt-12">
          <Link href="/surah" passHref>
            <button className="flex items-center gap-2 py-3 px-6 bg-primary text-white text-lg rounded-full hover:bg-hoverGreen transition-colors shadow-lg">
              <span>عرض جميع السور</span>
              <FaArrowCircleRight size={20} />
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default AllSurah;
