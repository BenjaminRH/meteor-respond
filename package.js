Package.describe({
	summary: "A fast & lightweight polyfill for min/max-width and CSS3 Media Queries (for IE 6-8, and more)."
});

Package.on_use(function (api) {
	api.add_files([
		'lib/respond/respond.src.js'
		], 'client');
});