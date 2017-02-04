self.onfetch = function(event) {
	new Response("<h1>página offline</h1>");
}

self.oninstall = function() {
	console.log("instalou");
}

self.addEventListener('fetch', function(event) {
	new Response("<h1>página offline</h1>");
});