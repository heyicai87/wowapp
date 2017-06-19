/**
 * Created by Administrator on 2017/3/13.
 */

//var app=angular.module('wowApp',['ng','ngRoute']);
//app.config(['$routeProvider',function($routeProvider){
//  $routeProvider
//    .when('/myNewIntro',{
//      templateUrl:'tpl/newIntro.html'
//    })
//    .when('/myJunTuanZaiLin',{
//      templateUrl:'tpl/juntuanzailin.html'
//    })
//    .when('/myWeibo',{
//      templateUrl:'tpl/weibo.html'
//    })
//    .otherwise({redirectTo:'/myNewIntro'})
//}]);
//app.controller('wowCtrl',['$scope',function($scope){
//  var div=document.querySelector('section .mui-segmented-control');
//  div.addEventListener('click',function(e){
//    var target= e.target;
//    if(target.nodeName==='A'){
//      //console.log(target);
//        if(target.className==='mui-toggle'){
//          document.querySelector('.mui-toggle.active').className='mui-toggle';
//          target.className='mui-toggle active'
//      }
//    }
//  })
//}])

//mui.init();
//(function($) {
//  $('.mui-scroll-wrapper').scroll({
//    indicators: true //是否显示滚动条
//  });
//  var html2 = `<ul class="mui-table-view">
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/B2Q1BI4I03MQ1476685505910.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									军团再临
//									<p>小号升装备更快！7.2版本装备等级一览</p>
//								</div>
//							</a>
//						</li>
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/B2Q1BI4I03MQ1476685505910.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									军团再临
//									<p>7.2随从提升到900级 大量旧版物资作废</p>
//								</div>
//							</a>
//						</li>
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/K2B.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									军团再临
//									<p>7.2随从提升到900级 大量旧版物资作废</p>
//								</div>
//							</a>
//						</li>
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/K2B.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									军团再临
//									<p>7.1.5变速节拍器测评 暗牧可拿来当常驻</p>
//								</div>
//							</a>
//						</li>
//					</ul>`;
//  var html3 = `<ul class="mui-table-view">
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/70.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									蓝贴博文
//									<p>小号升装备更快！7.2版本装备等级一览</p>
//								</div>
//							</a>
//						</li>
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/AB5.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									蓝贴博文
//									<p>7.2随从提升到900级 大量旧版物资作废</p>
//								</div>
//							</a>
//						</li>
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/AB5.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									蓝贴博文
//									<p>7.2随从提升到900级 大量旧版物资作废</p>
//								</div>
//							</a>
//						</li>
//						<li class="mui-table-view-cell mui-media">
//							<a href="#">
//								<img src="img/K2B.jpg" alt="" class="mui-media-object mui-pull-left"/>
//								<div class="mui-media-body">
//									蓝贴博文
//									<p>7.1.5变速节拍器测评 暗牧可拿来当常驻</p>
//								</div>
//							</a>
//						</li>
//					</ul>`;
//  var item2 = document.getElementById('myJunTuanZaiLin');
//  var item3 = document.getElementById('myWeibo');
//	var el=document.getElementById('slider');
//	//console.log(item2)
//	console.log(el);
//  el.addEventListener('slider', function(e) {
//		debugger;
//    if (e.detail.slideNumber === 1) {
//      if (item2.querySelector('.mui-loading')) {
//
//        setTimeout(function() {
//          item2.querySelector('.mui-scroll').innerHTML = html2;
//        }, 500);
//      }
//    } else if (e.detail.slideNumber === 2) {
//      if (item3.querySelector('.mui-loading')) {
//        setTimeout(function() {
//          item3.querySelector('.mui-scroll').innerHTML = html3;
//        }, 500);
//      }
//    }
//  });
//  var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
//  $('.mui-input-group').on('change', 'input', function() {
//    if (this.checked) {
//      sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
//      //force repaint
//      sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
//    }
//  });
//})(mui);
//-------------------------------------------------------------------------------
//主页面左右滑动切换
mui.init({
	gestureConfig: {
		tap: true, //默认为true
		doubletap: true, //默认为false
		longtap: true, //默认为false
		swipe: true, //默认为true
		drag: true, //默认为true
		hold: false,//默认为false，不监听
		release: false//默认为false，不监听
	}
});
(function($) {
	$('.mui-scroll-wrapper.new-scroll').scroll({
		indicators: true //是否显示滚动条
	});

	var html2 = `<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/B2Q1BI4I03MQ1476685505910.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									军团再临
									<p>小号升装备更快！7.2版本装备等级一览</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/B2Q1BI4I03MQ1476685505910.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									军团再临
									<p>7.2随从提升到900级 大量旧版物资作废</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/K2B.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									军团再临
									<p>7.2随从提升到900级 大量旧版物资作废</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/K2B.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									军团再临
									<p>7.1.5变速节拍器测评 暗牧可拿来当常驻</p>
								</div>
							</a>
						</li>
					</ul>`;
	var html3 = `<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/70.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									蓝贴博文
									<p>小号升装备更快！7.2版本装备等级一览</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/AB5.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									蓝贴博文
									<p>7.2随从提升到900级 大量旧版物资作废</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/AB5.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									蓝贴博文
									<p>7.2随从提升到900级 大量旧版物资作废</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a class="mainContIn">
								<img src="img/K2B.jpg" alt="" class="mui-media-object mui-pull-left"/>
								<div class="mui-media-body">
									蓝贴博文
									<p>7.1.5变速节拍器测评 暗牧可拿来当常驻</p>
								</div>
							</a>
						</li>
					</ul>`;
	var item2 = document.getElementById('juntuanzailin');
	var item3 = document.getElementById('lantiebowen');
	//document.getElementById('mainSlider').addEventListener("swipeleft",function(){
	//	console.log("你正在向左滑动");
	//});
	document.getElementById('mainSlider').addEventListener('slide', function(e) {
		if (e.detail.slideNumber === 1) {
			if (item2.querySelector('.mui-loading')) {
					item2.querySelector('.mui-scroll').innerHTML = html2;
			}
		} else if (e.detail.slideNumber === 2) {
			if (item3.querySelector('.mui-loading')) {
					item3.querySelector('.mui-scroll').innerHTML = html3;
			}
		}
	});
})(mui);
//默认子网页

//打开新窗口
document.querySelector('div#mainIndex').addEventListener('tap',function(e){
		//debugger;
	var target=e.target;
	e.preventDefault();
  console.log(target);
	if(target.nodeName==='A'||target.className==='mui-media-body'||target.nodeName==='P'||target.className==='mui-media-object mui-pull-left'){
		//e.preventDefault();
		console.dir(e.target);
		//debugger;
		mui.openWindow({
			url:'newsCont.html',
			id:'newsCont.html',
			styles:{
				top:0,//新页面顶部位置
				bottom:0,//新页面底部位置
				width:'50%'//新页面宽度，默认为100%
				//height:newpage-height//新页面高度，默认为100%
			},
			extras:{//自定义扩展参数，可以用来处理页面间传值
			},
			createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show:{
				autoShow:true,//页面loaded事件发生后自动显示，默认为true
				aniShow:'slide-in-left',//页面显示动画，默认为”slide-in-right“；
				duration:2000,//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				event:'titleUpdate',//页面显示时机，默认为titleUpdate事件时显示
				extras:{}//窗口动画是否使用图片加速
			},
			waiting:{
				autoShow:true,//自动显示等待框，默认为true
				title:'正在加载...',//等待对话框上显示的提示内容
				options:{
	     	 width:'100%'//等待框背景区域宽度，默认根据内容自动计算合适宽度
				//height:waiting-dialog-height//等待框背景区域高度，默认根据内容自动计算合适高度
				}
			}
		});
	}
});
var gallery = mui('.mui-slider.advert');
gallery.slider({
	interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
});
//侧滑容器父节点
//var offCanvasWrapper = mui('#offCanvasWrapper');
////主界面容器
//var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
////菜单容器
//var offCanvasSide = document.getElementById("offCanvasSide");
////Android暂不支持整体移动动画
////if (!mui.os.android) {
////	document.getElementById("move-togger").classList.remove('mui-hidden');
////	var spans = document.querySelectorAll('.android-only');
////	for (var i = 0, len = spans.length; i < len; i++) {
////		spans[i].style.display = "none";
////	}
////}
////移动效果是否为整体移动
//var moveTogether = false;
////侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
//var classList = offCanvasWrapper[0].classList;
////变换侧滑动画移动效果；
//mui('.mui-input-group').on('change', 'input', function() {
//	if (this.checked) {
//		offCanvasSide.classList.remove('mui-transitioning');
//		offCanvasSide.setAttribute('style', '');
//		classList.remove('mui-slide-in');
//		classList.remove('mui-scalable');
//		switch (this.value) {
//			case 'main-move':
//				if (moveTogether) {
//					//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
//					offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
//					moveTogether = false;
//				}
//				break;
//			case 'main-move-scalable':
//				if (moveTogether) {
//					//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
//					offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
//				}
//				classList.add('mui-scalable');
//				break;
//			case 'menu-move':
//				classList.add('mui-slide-in');
//				break;
//			case 'all-move':
//				moveTogether = true;
//				//整体滑动时，侧滑菜单在inner-wrap内
//				offCanvasInner.insertBefore(offCanvasSide, offCanvasInner.firstElementChild);
//				break;
//		}
//		offCanvasWrapper.offCanvas().refresh();
//	}
//});
//document.getElementById('offCanvasShow').addEventListener('tap', function() {
//	offCanvasWrapper.offCanvas('show');
//});
//document.getElementById('offCanvasHide').addEventListener('tap', function() {
//	offCanvasWrapper.offCanvas('close');
//});
////主界面和侧滑菜单界面均支持区域滚动；
//mui('#offCanvasSideScroll').scroll();
//mui('#offCanvasContentScroll').scroll();
////实现ios平台的侧滑关闭页面；
//if (mui.os.plus && mui.os.ios) {
//	offCanvasWrapper[0].addEventListener('shown', function(e) { //菜单显示完成事件
//		plus.webview.currentWebview().setStyle({
//			'popGesture': 'none'
//		});
//	});
//	offCanvasWrapper[0].addEventListener('hidden', function(e) { //菜单关闭完成事件
//		plus.webview.currentWebview().setStyle({
//			'popGesture': 'close'
//		});
//	});
//}