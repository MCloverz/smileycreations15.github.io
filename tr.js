
function tracc(a){var xhr = new XMLHttpRequest;xhr.open("get","https://api.ipify.org",false);xhr.send();var n=new URLSearchParams;n.append("uagent",navigator.userAgent),n.append("action",a),n.append("page",location.href),n.append("ip",xhr.responseText),navigator.sendBeacon("http://35.184.132.158:8090/trac",n)}tracc("enter"),addEventListener("beforeunload",function(){tracc("unload")});
