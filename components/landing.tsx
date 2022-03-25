import Head from 'next/head';
import React from 'react';
import LandingHeader from './landingHeader';

import config from '../config.json';
import Footer from './footer';

export default function Landing({
  children,
  title = config.meta.title,
  description = config.meta.description,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/static/autowheelie-favicon.png" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="AutoWheelie" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={config.meta.image} />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <LandingHeader />
    </>
  );
}
