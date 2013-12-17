$(document).ready(function ()
{
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