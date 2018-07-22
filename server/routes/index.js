import express from 'express';
import home from './homePage';
import sitemap from './sitemap';

const app = express();

//app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', home);
app.get('/sitemap.xml', sitemap);

app.listen(80, () => {
  console.log('SEO site listening on port 80!');
});
