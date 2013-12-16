$(document).ready(function ()
{
	lights.forEach(function (item)
	{
		checkWithValue(item.TimeChannels, item.Id);
	});

});


function checkWithValue(val, group) {
    $(":checkbox").filter(function() {
        return this.value == val & this.name == group;
    }).attr("checked", "true").checkboxradio("refresh");;
}