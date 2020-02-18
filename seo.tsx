import React from 'react';

import Head from 'next/head';

import { DOMAIN, ROBOTS } from '~/utils/config';

interface Iprops {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const Seo: React.FC<Iprops> = ({ title, description, image, slug }) => (
  <Head>
    <title>{title}</title>

    <meta name="description" content={description} />

    <link rel="canonical" href={`${DOMAIN}/${slug}`} />

    <meta property="og:locale" content="pt_BR" />

    <meta property="og:type" content="website" />

    <meta property="og:title" content={title} />

    <meta property="og:description" content={description} />

    <meta property="og:url" content="https://octadesk.com" />

    <meta property="og:site_name" content={title} />

    <meta property="og:image" content={image} />

    <meta property="og:image:secure_url" content={image} />

    <meta property="og:image:width" content="484" />

    <meta property="og:image:height" content="252" />

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:description" content={description} />

    <meta name="twitter:title" content={title} />

    <meta name="twitter:image" content={image} />

    {ROBOTS && <meta name="robots" content="noindex" />}
  </Head>
);

export default Seo;
