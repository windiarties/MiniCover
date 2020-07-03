// import path from 'path'
// import {
// 	Builder,
// 	By,
// 	Key,
// 	until
// } from 'selenium-webdriver'
// import webdriver from 'selenium-webdriver'

// module.exports.getStreaming = function (req, res) {
// 	var param = {
// 		id: req.body['id'],
// 		url: req.body['url']
// 	}
// 	console.log('param', param)


// 	var chart = [];
// 	// 	data.map((index, item) => {
// 	var url = 'https://www.youtube.com/results?search_query=' + param.id + '+' + param.url + '+cover&sp=CAM%253D';
// 	console.log(url)

// 	async function example() {

// 		var driver = new webdriver.Builder().forBrowser('chrome').build();
// 		await driver.get(url)

// 		await driver.executeAsyncScript(scrollBottom)
// 			.then(n => console.log(`scrolled ${n} time(s)`));

// 		await driver.findElements(By.xpath("/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer/div/div/div/div/h3/a")).then(function (elements) {
// 			for (var i = 0; i < elements.length; i++) {
// 				elements[i].getAttribute('aria-label').then(function (text) {

// 					var title = text.slice(0, text.indexOf('by') - 1).trim();
// 					var views = text.slice(text.indexOf('seconds') + 7, text.length - 5).trim();
// 					var channel = text.slice(text.indexOf('by') + 2).trim();
// 					var item = {
// 						title: title,
// 						views: views,
// 						channel: channel
// 					}
// 					chart.push(item)
// 					console.log(chart)
// 				});

// 			};
// 			// console.log(chart.length)
// 		})


// 	}
// 	example()


// 	function scrollBottom() {
// 		var count = arguments[arguments.length - 2] || 0x7fffffff;
// 		var callback = arguments[arguments.length - 1];

// 		/* get the scrollable container */
// 		var elm = document.elementFromPoint(window.innerWidth - 25, window.innerHeight / 2);
// 		for (; elm && (++elm.scrollTop, !elm.scrollTop); elm = elm.parentElement);
// 		elm = elm || document.documentElement;

// 		/* hook XMLHttpRequest to monitor Ajax requests */
// 		if (!('idle' in XMLHttpRequest)) (function () {
// 			var n = 0,
// 				t = Date.now(),
// 				send = XMLHttpRequest.prototype.send;
// 			var dispose = function () {
// 				--n;
// 				t = Date.now();
// 			};
// 			var loadend = function () {
// 				setTimeout(dispose, 1)
// 			};
// 			XMLHttpRequest.idle = function () {
// 				return n > 0 ? 0 : Date.now() - t;
// 			};
// 			XMLHttpRequest.prototype.send = function () {
// 				++n;
// 				this.addEventListener('loadend', loadend);
// 				send.apply(this, arguments);
// 			};
// 		})();

// 		/* scroll until steady scrollHeight or count of scroll and no pending request */
// 		var i = 0,
// 			scrollHeight = -1,
// 			scrollTop = -1;
// 		(function scroll() {
// 			if ((scrollHeight === elm.scrollHeight || i === count) && XMLHttpRequest.idle() > 60)
// 				return callback(i);
// 			scrollTop = elm.scrollTop;
// 			scrollHeight = elm.scrollHeight;
// 			if (i < count)
// 				i += (elm.scrollTop = 0x7fffffff, scrollTop !== elm.scrollTop);
// 			setTimeout(scroll, 100);
// 		})();
// 	}
// 	scrollBottom()
// }