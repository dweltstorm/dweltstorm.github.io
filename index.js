
var url = new URL(window.location.href).searchParams.get('url');
var frame = document.getElementsByTagName('iframe')[0];

if(url == null) {
  frame.src = prompt('URL:');
} else {
  frame.src = url;
}
