import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author} />

        <title>{title}</title>

      </Helmet>

      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};
// default meta tags
Layout.defaultProps={
  title:"Ecommerce App",
  description: "This is an Ecommerce app built with Mern Stack",
  keywords: "ecommerce, shopping cart, mern stack, mern, react, node, mongodb",
  author: "Yashini",
}

export default Layout;
