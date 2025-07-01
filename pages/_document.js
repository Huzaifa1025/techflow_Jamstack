import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="TechFlow - Modern Digital Solutions. We create stunning, responsive websites and applications that drive results." />
        <meta name="keywords" content="web development, digital solutions, responsive design, modern websites, JAMstack" />
        <meta name="author" content="TechFlow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TechFlow - Modern Digital Solutions" />
        <meta property="og:description" content="We create stunning, responsive websites and applications that drive results." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechFlow - Modern Digital Solutions" />
        <meta name="twitter:description" content="We create stunning, responsive websites and applications that drive results." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

