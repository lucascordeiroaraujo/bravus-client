import React from 'react';

import { useSelector } from 'react-redux';

import Head from 'next/head';

import { useRouter } from 'next/router';

interface Iprops {
  page: string;
}

const Seo: React.FC<Iprops> = ({ page }) => {
  const router = useRouter();

  const { error, data } = useSelector((state: any) => ({
    error: state[`${page}Data`].error,
    data: state[`${page}Data`].data
  }));

  if (error) return null;

  const { seo_title, seo_description, seo_image } =
    page === 'blogPost' ? data[0].acf : data.acf;

  return (
    <Head>
      <title>{seo_title}</title>

      <meta name="description" content={seo_description} />

      <link
        rel="canonical"
        href={`https://bravusinvestimentos.com.br/${router.pathname}`}
      />

      <meta property="og:locale" content="pt_BR" />

      <meta property="og:type" content="website" />

      <meta property="og:title" content={seo_title} />

      <meta property="og:description" content={seo_description} />

      <meta property="og:url" content="https://bravusinvestimentos.com.br" />

      <meta property="og:site_name" content={seo_title} />

      <meta property="og:image" content={seo_image.url} />

      <meta property="og:image:secure_url" content={seo_image.url} />

      <meta property="og:image:width" content="484" />

      <meta property="og:image:height" content="252" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:description" content={seo_description} />

      <meta name="twitter:title" content={seo_title} />

      <meta name="twitter:image" content={seo_image.url} />
    </Head>
  );
};

export default Seo;
