var url = prompt('URL:')
var frame = document.createElement('iframe'); frame.src = url; frame.style = "display:block;width:100vw;height:100vh;border:none;"
document.body.appendChild(frame);
