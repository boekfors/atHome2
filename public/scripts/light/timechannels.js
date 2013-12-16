$(document).ready(function ()
{
	lights.each(function ()
	{
		checkWithValue(this.Timechannels, this.Id);
	});

});


function checkWithValue(val, group) {
    $(":checkbox").filter(function() {
        return this.value == val & this.name == group;
    }).attr("checked", "true").checkboxradio("refresh");;
}