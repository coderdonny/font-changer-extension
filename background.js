chrome.runtime.onInstalled.addListener(() => {
	console.log('Extension installed!');
});

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: () => {
			const font = prompt('Enter a font name:', 'Open Sans');
			if (font) {
				document.body.style.fontFamily = font;
			}
		},
	});
});
