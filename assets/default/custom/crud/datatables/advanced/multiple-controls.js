var DatatablesAdvancedMultipleControls = {
	init: function ()
	{
		$("#m_table_1").DataTable(
		{
			dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12 col-md-6'i><'col-sm-12 col-md-6'p>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columnDefs: [
			{
				targets: -1,
				title: "Actions",
				orderable: !1,
				render: function (a, t, e, n)
				{
					return '\n                        <span class="dropdown">\n                            <a href="#" class="btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown" aria-expanded="true">\n                              <i class="la la-ellipsis-h"></i>\n                            </a>\n                            <div class="dropdown-menu dropdown-menu-right">\n                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\n                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\n                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" title="View">\n                          <i class="la la-edit"></i>\n                        </a>'
				}
			},
			{
				targets: 4,
				render: function (a, t, e, n)
				{
					var l = {
						1:
						{
							title: "Bills Due",
							class: "m-badge--danger"
						},
						2:
						{
							title: "Vacated",
							class: " m-badge--primary"
						},
						3:
						{
							title: "Canceled",
							class: " m-badge--primary"
						},
						4:
						{
							title: "Success",
							class: " m-badge--success"
						},
						5:
						{
							title: "Info",
							class: " m-badge--info"
						},
						6:
						{
							title: "Out of Order",
							class: " m-badge--metal"
						},
						7:
						{
							title: "Warning",
							class: " m-badge--warning"
						}
					};
					return void 0 === l[a] ? a : '<span class="m-badge ' + l[a].class + ' m-badge--wide">' + l[a].title + "</span>"
				}
			},
			{
				targets: 0,
				render: function (a, t, e, n)
				{
					var l = {
						1:
						{
							title: "Occupied",
							state: "accent"
						},
						2:
						{
							title: "For Rent",
							state: "primary"
						},
						3:
						{
							title: "For Sale",
							state: "danger"
						}
					};
					return void 0 === l[a] ? a : '<span class="m-badge m-badge--' + l[a].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + l[a].state + '">' + l[a].title + "</span>"
				}
			}]
		})
	}
};
jQuery(document).ready(function ()
{
	DatatablesAdvancedMultipleControls.init()
});