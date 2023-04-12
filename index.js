
var url = new URL(window.location.href).searchParams.get('url'); ?? "https://google.com";
var frame = document.createElement('iframe'); frame.src = url;
