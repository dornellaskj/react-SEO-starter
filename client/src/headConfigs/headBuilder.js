import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Head extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			config: props.headJson
		};

		this.buildLinks = this.buildLinks.bind(this);
		this.buildMeta = this.buildMeta.bind(this);
	}

	buildLinks() {
		let linkArray = [];
		if (this.state.config.scss && this.state.config.scss.length > 0) {
			this.state.config.scss.forEach( (linkIn, index) => {
				const key = "link" + index;
				if (linkIn.type) {
					linkArray.push(<link key={key} rel={linkIn.rel} type={linkIn.type} href={linkIn.href} />);
				} else {
					linkArray.push(<link key={key} rel={linkIn.rel} href={linkIn.href} />);
				}
				
			});
		}
		return linkArray;
	}
	buildMeta() {
		let metaArray = [];
		if(this.state.config.meta) {  
			this.state.config.meta.forEach((metaIn, index) => {
				const key = "meta" + index;
				if(metaIn.name) {
					metaArray.push(<meta key={key} name={metaIn.name} content={metaIn.content} />);
				} else {
					metaArray.push(<meta key={key} name={metaIn.property} content={metaIn.content} />);
				}
			});
		}
		return metaArray;
	}
	buildJson() {
		return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: this.state.config.jsonLd }} />;
	}
	render() {
		let metaTags = this.buildMeta();
		let links = this.buildLinks();
		let buildJson = this.buildJson();
		return (
			<head>
				<title>{this.state.config.title}</title>
				{metaTags}
				{links}		
				{buildJson}
			</head>
		);
	}
}
Head.propTypes = {
  headJson: PropTypes.object
};
export default Head;