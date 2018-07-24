#!/bin/bash
echo Please enter the name of your new page
read pageName
upperPageName=`echo ${pageName:0:1} | tr  '[a-z]' '[A-Z]'`${pageName:1}
echo "import React from 'react';
import ReactDOMServer from 'react-dom/server';
import $pageName from '../../client/src/components/$pageName/$upperPageName';
import Head from '../../client/src/headConfigs/headBuilder';
import configs from '../../client/src/headConfigs/$pageName';

function renderFullPage(html, head, bundle) {
  return \`
    <!doctype html>
    <html lang=\"en\">
      \${head}
      <body>
        <div id=\"app\">\${html}</div>
        <script src=\"\${bundle}\"></script>
      </body>
    </html>
    \`;
}

export default (req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
      <$pageName />
  );
  const head = ReactDOMServer.renderToString(
    <Head headJson={configs.default} />
  );
  const bundle = '/$pageName-index.js';
  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.status(200).send(renderFullPage(html, head, bundle));
  }
};" >> ./server/routes/$pageName.js
mkdir ./client/src/components/$pageName/
mkdir ./client/src/components/$pageName/test/
echo "import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

class $upperPageName extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
        <div className=\"container\">
            <Header />
            <p>This is a scaffolded page!</p>
            <Footer />
        </div>
        );
    }
}

export default $upperPageName;" >> ./client/src/components/$pageName/$upperPageName.js
echo "module.exports.default = 
{
	\"title\": \"$upperPageName Title\",
	meta: [
    { name: \"viewport\", content: \"width=device-width,initial-scale=1\" },
    { name: \"description\", content: \"page description here.\" },
		{ property:\"og:url\", content:\"http://www.example.com/\"},
		{ property:\"og:description\", content:\"page description here.\"},
		{ property:\"og:title\", content:\"$upperPageName Title\"},
		{ property:\"og:image\", content:\"image url here\"},
		{ property:\"og:site_name\",	content:\"example.com\"}
	],
	scss: [
		{rel:\"canonical\", href:\"cannonical URL here\"},
		{rel:\"stylesheet\", type:\"text/css\", href:\"/$pageName.css\"}
	],
	jsonLd: \`{
		\"@context\": \"http://schema.org\",
		\"@type\": \"Person\",
		\"address\": {
			\"@type\": \"PostalAddress\",
			\"addressLocality\": \"Colorado Springs\",
			\"addressRegion\": \"CO\",
			\"postalCode\": \"80840\",
			\"streetAddress\": \"100 Main Street\"
		},
		\"colleague\": [
			\"http://www.example.com/JohnColleague.html\",
			\"http://www.example.com/JameColleague.html\"
		],
		\"email\": \"mailto:info@example.com\",
		\"image\": \"janedoe.jpg\",
		\"jobTitle\": \"Research Assistant\",
		\"name\": \"Jane Doe\",
		\"alumniOf\": \"Dartmouth\",
		\"birthPlace\": \"Philadelphia, PA\",
		\"birthDate\": \"1979.10.12\",
		\"height\": \"72 inches\",
		\"gender\": \"female\",
		\"memberOf\": \"Republican Party\",
		\"nationality\": \"African American\",
		\"telephone\": \"(123) 456-6789\",
		\"url\": \"http://www.example.com\",
		\"sameAs\" : [ \"https://www.facebook.com/\",
		\"https://www.linkedin.com/\",
		\"http://twitter.com/\",
		\"http://instagram.com/\",
		\"https://plus.google.com/\"]
	}\`
};" >> ./client/src/headConfigs/$pageName.js

echo "@import './common';
@import './mixins';" >> ./client/src/styles/$pageName.scss
echo "import React from 'react';
import { render } from 'react-dom';
import $upperPageName from './components/$pageName/$upperPageName';
import './styles/$pageName.scss';

render(
  <$upperPageName/>,
  document.getElementById('app')
);" >> ./client/src/$pageName.js

echo "import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import $upperPageName from '../$upperPageName.js';
describe('<$upperPageName />', () => {
  describe('render()', () => {
    test('component should have a Header', () => {
      const wrapper = shallow(<$upperPageName />);
      expect(toJson(wrapper).children[0].type).toEqual('Header');
    });
    test('component should have a HomePage', () => {
      const wrapper = shallow(<$upperPageName />);
      expect(toJson(wrapper).children[1].node.rendered).toEqual('This is a scaffolded page!');
    });
    test('component should have a Footer', () => {
      const wrapper = shallow(<$upperPageName />);
      expect(toJson(wrapper).children[2].type).toEqual('Footer');
    });
  });
});
" >> ./client/src/components/$pageName/test/$upperPageName.test.js
echo "1. Please add to entry in all of the client webpack files: $pageName: './src/$pageName.js' 
2. Please add to your /server/routes/index.js file: app.get('/$pageName', $pageName); 
3. Please add this import to the top of your /server/routes/index.js file: import $pageName from './$pageName';
Enter any value and press return when finished."
read dun