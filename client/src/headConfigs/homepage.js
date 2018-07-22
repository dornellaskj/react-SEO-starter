module.exports.default = 
{
	"title": "SEO Starter",
	meta: [
		{ name: "viewport", content: "width=device-width,initial-scale=1" },
		{ name: "description", content: "description here." },
		{ property:"og:url", content:"https://www.example.com/"},
		{ property:"og:description", content:"description here."},
		{ property:"og:title", content:"SEO Starter"},
		{ property:"og:image", content:"image url here"},
		{ property:"og:site_name",	content:"example.com"}
	],
	scss: [
		{rel:"canonical", href:"https://www.example.com/"},
		{rel:"stylesheet", type:"text/css", href:"/home.css"}
	],
	jsonLd: `{
		"@context": "http://schema.org",
		"@type": "Person",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Colorado Springs",
			"addressRegion": "CO",
			"postalCode": "80840",
			"streetAddress": "100 Main Street"
		},
		"colleague": [
			"http://www.example.com/JohnColleague.html",
			"http://www.example.com/JameColleague.html"
		],
		"email": "mailto:info@example.com",
		"image": "janedoe.jpg",
		"jobTitle": "Research Assistant",
		"name": "Jane Doe",
		"alumniOf": "Dartmouth",
		"birthPlace": "Philadelphia, PA",
		"birthDate": "1979.10.12",
		"height": "72 inches",
		"gender": "female",
		"memberOf": "Republican Party",
		"nationality": "African American",
		"telephone": "(123) 456-6789",
		"url": "http://www.example.com",
		"sameAs" : [ "https://www.facebook.com/",
		"https://www.linkedin.com/",
		"http://twitter.com/",
		"http://instagram.com/",
		"https://plus.google.com/"]
	}`
};