var resourceData = chrome.extension.getURL('')
const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.extension.getURL('Scripts/content_module.js'));
window.ExtensionPath = resourceData
const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
head.insertBefore(script, head.lastChild);

const GlobalScript = document.createElement('script')
GlobalScript.text = `var ExtensionPath = "${resourceData}"`;
GlobalScript.type = 'text/javascript';
head.insertBefore(GlobalScript, head.lastChild)