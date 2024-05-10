import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>

      <Footer />
    </div>
  );
};
// default meta tags
Layout.defaultProps = {
  title: "Miracle",
  description: "This is an Shopping Mall App built with Mern Stack",
  keywords: "MIRACLE, Shopping cart, mern stack, mern, react, node, mongodb",
  author: "Yashini",
};

export default Layout;
