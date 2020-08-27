import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta http-equiv='content-type' content='text/html; charset=UTF-8' />
      {/* its for google verification google webmaster tool by verfiying you can see details performance data and good security  */}
      <meta name='google-site-verification' content='' />
      <meta name='theme-color' content='#FF7714' />
      <meta name='keywords' content='' />
      {/* <!-- Open Graph Protocol : its useful for sharing our website in social media and how we want to be showed to user in facebook or twiter and ...  --> */}
      <meta name='og:title' property='og:title' content='Food Delivery' />
      <meta property='og:description' content='Food Delivery Site boilerplate' />
      <meta property='og:description' content='' />
      <meta property='og:image' content='' />
      <title>React App</title>
    </Helmet>
  );
};
export default Head;
