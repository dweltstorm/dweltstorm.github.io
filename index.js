
var url = new URL(window.location.href).searchParams.get('url');
var frame = document.getElementById('frame');

if(url == null) {
  frame.src = prompt('URL:');
} else {
  frame.src = url;
}
