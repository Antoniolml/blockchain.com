import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface WebLayout {
  children?: React.ReactNode;
}

const WebLayout = ({ children }: WebLayout) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;
