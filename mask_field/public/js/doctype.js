
let d = new frappe.ui.Dialog({
    "title": __("Set Transaction Sent"),
    "fields": [
        {
            "fieldname": "description_field_phone",
            "fieldtype": "Data",
            "label": "Phone Number Field",
            "options":":mask:(000) 000-0000",
            "description": "<div><p>This is a description field with a mask and example.</p><p>Mask: US Phone Number (000) 000-0000</p><p>Example: (123) 456-7890</p></div>"
        },
        {
            "fieldname": "description_field_mobile",
            "fieldtype": "Data",
            "label": "Mobile Number Field",
            "options":":mask:(+000) 000-000-000",
            "description": "<div><p>This is a description field with a mask and example.</p><p>Mask: US Mobile Number (+000) 000-000-000</p><p>Example: (+967) 770-788-938</p></div>"
        },
        {
            "fieldname": "description_field_date",
            "fieldtype": "Data",
            "label": "Date Field",
            "options":":mask:00-000-0000",
            "description": "<div><p>This is a description field with a mask and example.</p><p>Mask: US Date  00-00-0000</p><p>Example: 10-10-2010</p></div>"
        },
        {
            "fieldname": "description_field_time",
            "fieldtype": "Data",
            "label": "Time Field",
            "options":":mask:00-00",
            "description": "<div><p>This is a description field with a mask and example.</p><p>Mask: 00:00</p><p>Example: 09:30</p></div>"
        },
        {
            "fieldname": "description_field_ip",
            "fieldtype": "Data",
            "label": "IP Address Field",
            "options":":mask:000.000.000.000",
            "description": "<div><p>This is a description field with a mask and example.</p><p>Mask: 000.000.000.000</p><p>Example: 192.168.0.1</p></div>"
        },               
    ],
    primary_action: function () {
        frm.events.relplied(frm, d.get_values().notes);
        d.hide();
    },
    primary_action_label: __("Set Relplied")
}).show();