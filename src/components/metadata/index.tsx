import Head from 'next/head';

interface metaTags {
  title: string;
  description: string;
  robots?: string;
  type?: string;
  locale?: string;
  pageURL?: string;
  site_name?: string;
  canonicalLink?: string;
}

const MetaData = ({
  title,
  description,
  robots,
  type,
  locale,
  pageURL,
  site_name,
  canonicalLink,
}: metaTags) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robots} />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content={locale ? locale : 'en-US'} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:site_name" content={site_name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <link rel="canonical" href={canonicalLink} />
    </Head>
  );
};

export default MetaData;
