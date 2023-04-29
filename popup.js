// Retrieve the saved font from storage and set it on the select element
chrome.storage.local.get('font', function (data) {
	if (data.font) {
		const selectElement = document.getElementById('font-select');
		selectElement.value = data.font;
	}
});

// Get the select element and listen for changes
chrome.storage.local.get('font', function (data) {
	const selectElement = document.getElementById('font-select');
	selectElement.addEventListener('change', function () {
		// Get the selected font and save it to storage
		console.log('select test');
		const selectedFont = selectElement.value;
		chrome.storage.local.set({ font: selectedFont }, function () {
			console.log(`Selected font set to ${selectedFont}`);
		});
	});
});

// Add a click listener to the extension icon
// chrome.browserAction.onClicked.addListener(function (tab) {
// 	// Inject the content script into the current tab
// 	chrome.scripting.executeScript({
// 		target: { tabId: tab.id },
// 		files: ['content.js'],
// 	});
// });

function sendMessage(message) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.runtime.sendMessage({ action: 'change-font', font: font });
	});
}
