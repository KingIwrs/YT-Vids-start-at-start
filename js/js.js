var url = new URL(window.location);
var t = url.searchParams.get('t');

if (t == null) {
    url.searchParams.append('t', "1s");
    window.location.href = url;
}

