import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  /*used to customise the HTML and body tags that Next.js generates for each page in the application */
  return (
    <Html lang="en">
      {" "}
      {/*component from the next/document module that Next.js uses to generate the HTML tag of te page. The 
    'lang' attributes is set to 'en' to indicate that the language of the page is english */}
      <Head>
        {" "}
        {/*another component from the module that allows user to add elements to the head of HTML document */}
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Playfair+Display+SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {" "}
        {/*Body of the HTML document that Next.js generates */}
        <Main />{" "}
        {/*A components that is automatically provided by Next.js, which represents the main content of the page */}
        <NextScript />{" "}
        {/*component from the 'next/document' that is used to generate the necessary scripts for the page */}
      </body>
    </Html>
  );
}
