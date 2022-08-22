import Head from "next/head";

// global styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Resume | Matthew Sweeney</title>
        {/* <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" /> */}
        <meta property="og:site_name" content="Sweeney Resume" />
        <meta property="og:title" content="Matt Sweeney - Resume" />
        <meta
          property="og:description"
          content="Hi, I'm Matt. I like to do math & program."
        />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta name="theme-color" content="#3c374a" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <style jsx>{`
        div {
          height: 3300px;
          width: 2550px;
        }
        .flex {
          background-color: white;
          // background-image: url("./spruce_trees_with_snow_mountains_round_sunlight_blue_sky_background_4k_5k_hd_winter2.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right;
          // background-position: left;
          // background-position: center;
        }
      `}</style>
      <div className="flex flex-col text-6xl" style={{}}>
        {/* <div className="top-0 absolute h-full w-full backdrop-blur-[96px] /backdrop-grayscale-[.25] backdrop-contrast-[1.25] backdrop-brightness-[1.3] backdrop-hue-rotate-[-20deg]" /> */}
        <div className="z-10 /text-white">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
