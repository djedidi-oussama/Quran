import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReciterPage from "@/components/ReciterItem";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <Header index={2} />
      <ReciterPage params={params} />
      <Footer />
    </div>
  );
};

export default page;
