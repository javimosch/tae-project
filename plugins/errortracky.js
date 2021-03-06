//import '@/plugins/firebase'

! function(e, n) {
	let PROD = process.env.NODE_ENV === 'production'
	if (e && PROD) {
		var t = 'https://api.errortracky.com/';
		window.onerror = function(e, n, t, r, s) {
			return a({
				message: s && s.message || e,
				lineNumber: t,
				columnNumber: r,
				stack: s && s.stack,
				fileName: s && s.fileName,
				name: s && s.name,
				number: s && s.number,
				description: s && s.description,
				message: s && s.message,
				url: n
			}), !1
		}, window.addEventListener('unhandledrejection', function(e) {
			window.aa = e, e.promise.catch(a)
		})
	}

	function a(e, a) {
		if ((e = {
				stack: e.stack,
				fileName: e.fileName,
				name: e.name,
				lineNumber: e.lineNumber,
				columnNumber: e.columnNumber,
				number: e.number,
				description: e.description,
				message: e.message,
				url: e.url,
				at: new Date,
				pid: n
			}).message) {
			var r = new XMLHttpRequest;
			r.open('POST', t + 'rpc/taeSendError', !0), r.setRequestHeader('Content-Type', 'application/json'), r.onreadystatechange = function() {
				4 === r.readyState && 200 === r.status && a && a(r.responseText)
			}, r.send(JSON.stringify({
				n: 'taeSendError',
				d: e
			}))
		}
	}
}('undefined' != typeof window, '5acf19b62e76546bdabd4e44');
