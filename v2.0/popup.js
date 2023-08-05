// Inject the widget into the iframe
function injectWidget(widgetContent) {
    var iframe = document.createElement("iframe");
    iframe.srcdoc = widgetContent;
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "500px"; // Set the desired height for the iframe
    document.getElementById("cryptoWidget").appendChild(iframe);
  }
  
  // Fetch the widget content from the background script
  chrome.runtime.sendMessage({ action: "fetchWidgetContent" }, function (response) {
    if (response && response.widgetContent) {
      injectWidget(response.widgetContent);
    }
  });
  