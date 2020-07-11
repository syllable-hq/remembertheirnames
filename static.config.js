import React from 'react';
// import axios from 'axios';

 const siteRoot = 'https://remembertheirnames.netlify.app';
 const stagingSiteRoot = 'http://localhost:3000';
 const stagingSiteServer = 'http://localhost:5000';

// static.config.js
export default {
  getSiteData: async ({ dev }) => {
    // const { data: souls } = await axios.get(
    //   `${stagingSiteServer}/api/souls`
    // )

    return {
      title: '',
      siteRoot: siteRoot,
      description: '',
      imageUrl: `${siteRoot}/xxxxxx.png`,
      imageWideUrl: `${siteRoot}/xxxxx.png`,
      type: 'website',
    }
  },
  plugins: ["react-static-plugin-sass"],
  siteRoot: siteRoot,
  stagingSiteRoot: stagingSiteRoot,
  getRoutes: async ({ dev }) => [
    {
      path: '/',
      template: 'src/Components/Home',
    },
    {
      path: 'about',
      template: 'src/Components/About',
    },
    {
      path: 'query',
      template: 'src/Components/Query',
    },
    {
      path: 'memorial',
      template: 'src/Components/Memorial',
    },
    {
      path: '404',
      template: 'src/Components/404',
    }
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, routeInfo},
  }) => {
    // note: routeInfo will be undefined during local dev
    const path = routeInfo && routeInfo.path || '/';
    const canonicalUrl = `${siteRoot}/${path === '/' ? '' : path}`;

    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link rel="preload" as="font" href="/fonts/Matter-Regular.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-Regular.woff" type="font/woff" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff" type="font/woff" crossOrigin="anonymous"/>
          <link rel="canonical" href={canonicalUrl} />

          <title>{siteData.title}</title>
          <meta name="title" content={siteData.title} />
          <meta name="description" content={siteData.description} />

          <meta property="og:title" content={siteData.title} />
          <meta property="og:description" content={siteData.description} />
          <meta property="og:image" content={siteData.imageWideUrl} />
          <meta property="og:type" content={siteData.type} />
          <meta property="og:url" content={canonicalUrl} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={siteData.title} />
          <meta property="twitter:description" content={siteData.description} />
          <meta property="twitter:image" content={siteData.imageWideUrl} />

        </Head>
        <Body>{children}</Body>
      </Html>
    )
  },
}
