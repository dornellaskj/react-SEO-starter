import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import sm from 'sitemap';

export default (req, res) => {
	const context = {};
	if (context.url) {
		res.writeHead(301, {
			Location: context.url,
		});
		res.end();
	} else {
		let sitemap = sm.createSitemap ({
      hostname: 'https://www.example.com',
      cacheTime: 600000,        // 600 sec - cache purge period
      urls: [
        { url: '/',  changefreq: 'daily', priority: 1.00 }
      ]
		});
		sitemap.toXML( function (err, xml) {
      res.header('Content-Type', 'application/xml');
      res.send( xml );
		});
	}
};
