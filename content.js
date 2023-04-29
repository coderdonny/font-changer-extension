chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log('Message received: ', request);
	if (request.action === 'change-font') {
		const font = request.font || 'Open Sans';
		document.body.style.fontFamily = font;
		sendResponse({ message: `Font set to ${font}` });
	}
});

document.body.style.backgroundColor = 'white';
