var url = prompt('URL:')
var frame = document.createElement('iframe'); frame.src = url;
document.body.appendChild(frame);
