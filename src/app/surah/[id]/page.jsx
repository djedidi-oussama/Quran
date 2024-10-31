import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SurahPage from "@/components/SurahItem";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <Header index={1} />
      <SurahPage params={params} />
      <Footer />
    </div>
  );
};

export default page;
