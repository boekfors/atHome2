/// <reference path="/scripts/jquery-2.0.3-vsdoc.js" />
$(document).bind('pageinit', function ()
{
	$('body').on('tap', '.save', function (event, ui)
	{
		saveSettings();
	});

	lights.forEach(function (item)
	{
		checkWithValue(item.TimeChannels, item.Id);
	});
});

function checkWithValue(val, group) {
	$(":checkbox").filter(function ()
	{
		var currentValue = parseInt(this.value);
		var orderedValue = parseInt(val);
		return ((currentValue & orderedValue) > 0) & this.name == group;
	}).attr("checked", "true").checkboxradio("refresh");
}

function saveSettings()
{
	var requestData = new Array();
	$('.timeChannel').each(function ()
	{
		var subTotal = 0;
		$(this).find('input:checked').each(function ()
		{
			subTotal += parseInt(this.value, 10);
		});

		requestData.push({ Id: this.id, TimeChannels: subTotal });
	})

	$.post('/light/timeChannels', requestData,function( data ) {
		  alert( "Data Loaded: " + data );
		  });
}