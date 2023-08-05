// Fetch the widget content from the external URL
function fetchWidgetContent(callback) {
    fetch("https://co-in.io/widget/pricelist.html?items=BTC%2CETH%2CLTC%2CXMR%2CDASH")
        .then((response) => response.text())
        .then((html) => callback(html))
        .catch((error) => console.error("Failed to fetch widget content:", error));
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "fetchWidgetContent") {
        fetchWidgetContent(function (widgetContent) {
            sendResponse({ widgetContent });
        });
        return true;
    }
});

// Handle the extension install or update
chrome.runtime.onInstalled.addListener(function () {
    // Perform any necessary setup here
});
