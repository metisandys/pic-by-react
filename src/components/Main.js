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

var PicByReactApp = React.createClass({
	render: function(){
		return (
			<section className="stage">
				<section className="img-sec">

				</section>
				<nav className="controller-nav">
				</nav>
			</section>
			);
	}
});

PicByReactApp.defaultProps = {
};

export default PicByReactApp;