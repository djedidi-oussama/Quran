import ApiDocumentation from "@/components/Api";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function page() {
  return (
    <div>
      <Header index={3} />
      <ApiDocumentation />
      <Footer />
    </div>
  );
}

export default page;
