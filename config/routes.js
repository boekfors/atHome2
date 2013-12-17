// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes()
{
	this.root('common#main');
	this.match('light', 'light#status');
	this.match('light/timechannels', 'light#timechannels');
	this.match('light/settings', 'light#settings');

	this.post('light', 'light#saveStatus');
	this.post('light/settings', 'light#saveSettings');
	this.post('light/timechannels', 'light#saveTimechannels');

	this.match('heat', 'heat#status');
}
