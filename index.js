
var url = new URL(window.location.href).searchParams.get('url');
var frame = document.createElement('iframe'); frame.src = url;
