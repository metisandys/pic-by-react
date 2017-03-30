require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

//获取图片相关的数据
let imageDatas = require('../data/imageData.json');

//利用自执行函数，将图片名信息转换成图片URL路径信息
imageDatas = (function getImageURL(imageDatasArr){
	for(var i=0, j= imageDatasArr.length; i<j; i++){
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.filename);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
	render: function(){
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL}
					 alt={this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
			);
	}
});

var PicByReactApp = React.createClass({
	render: function(){

		var controllerUnits = [],
			ImgFigures = [];

		imageDatas.forEach(function(value,index){
			ImgFigures.push(<ImgFigure data={value} key={index}/>)
		});

		return (
			<section className="stage">
				<section className="img-sec">
					{ImgFigures}
				</section>
				<nav className="controller-nav">
					{controllerUnits}
				</nav>
			</section>
			);
	}
});

PicByReactApp.defaultProps = {
};

export default PicByReactApp;