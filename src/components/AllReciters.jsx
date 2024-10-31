"use client";
import React, { useState } from "react";
import { BiBookOpen } from "react-icons/bi";
import { IoMdText } from "react-icons/io";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const AllReciters = ({ displayedReciters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const recitersPerPage = 6;

  // Filter reciters based on the search term
  const filteredReciters = displayedReciters.filter((reciter) =>
    reciter.reciter.ar.includes(searchTerm)
  );

  // Calculate pagination indices based on filtered reciters
  const indexOfLastSurah = currentPage * recitersPerPage;
  const indexOfFirstSurah = indexOfLastSurah - recitersPerPage;
  const currentReciters = filteredReciters.slice(
    indexOfFirstSurah,
    indexOfLastSurah
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredReciters.length / recitersPerPage);

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
        <h1 className="text-4xl font-bold text-primary mb-4">قائمة القراء</h1>
        <p className="text-lg text-text">تصفح قائمة من القراء المختارين</p>
      </div>

      {/* Search Input */}
      {displayedReciters.length > 6 && (
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="ابحث عن قارئ"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to the first page after a new search
            }}
            className="p-2 border border-verse rounded w-full max-w-md text-right"
            style={{ backgroundColor: "var(--cardBg)", color: "var(--text)" }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentReciters.map((reciter) => (
          <div
            key={reciter.id}
            className="bg-cardBg shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl text-center"
          >
            <h2 className="text-verse text-2xl font-bold mb-3">
              {reciter.reciter.ar}
            </h2>
            <div className="text-left space-y-2">
              <p className="flex items-center text-text font-medium">
                <IoMdText className="mr-3 text-primary" size={20} />
                <span className="font-semibold mr-1">الرواية:</span>
                <span className="ml-1">{reciter.rewaya.ar}</span>
              </p>
            </div>
            <Link href={`/reciters/${reciter.id}`} passHref>
              <button className="w-full flex items-center mt-2 justify-center gap-2 py-2 px-4 bg-primary text-white rounded-full hover:bg-hoverGreen transition-colors font-bold">
                <span>استمع</span>
                <BiBookOpen size={18} />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {filteredReciters.length > recitersPerPage && (
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

      {/* Button to See All Reciters */}
      {filteredReciters.length <= recitersPerPage && (
        <div className="flex justify-center mt-12">
          <Link href="/reciters" passHref>
            <button className="flex items-center gap-2 py-3 px-6 bg-primary text-white text-lg rounded-full hover:bg-hoverGreen transition-colors shadow-lg">
              <span>عرض جميع القراء</span>
              <FaArrowCircleRight size={20} />
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default AllReciters;
