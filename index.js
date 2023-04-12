var frame = document.createElement('iframe'); frame.src = window.location.url || 'https://google.com'; frame.style = "position:absolute;top:0;left:0;width:100vw;height:100vh;border:0;margin:0;"
document.body.appendChild(frame);
