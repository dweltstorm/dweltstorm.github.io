var url = prompt('URL:')
var frame = document.createElement('iframe'); frame.src = url; frame.style = "position:absolute;top:0;left:0;width:100vw;height:100vh;border:0"
document.body.appendChild(frame);
