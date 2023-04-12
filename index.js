
var url = new URL(window.location.href).searchParams.get('url');
var frame = document.getElementsByTagName('iframe')[0]; frame.src = url ?? prompt('URL: ');
