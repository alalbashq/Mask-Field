from . import __version__ as app_version

app_name = "mask_field"
app_title = "Mask Field"
app_publisher = "Albashq Alshwmy"
app_description = "The \"mask\" field type is a type of input field used to apply specific formatting rules to the entered values. It allows you to specify a specific pattern for input, making it easier to format the data in a specific way."
app_email = "al.alshwmy@gmail.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/mask_field/css/mask_field.css"
# app_include_js = "/assets/mask_field/js/mask_field.js"

# include js, css files in header of web template
# web_include_css = "/assets/mask_field/css/mask_field.css"
# web_include_js = "/assets/mask_field/js/mask_field.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "mask_field/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "mask_field.utils.jinja_methods",
#	"filters": "mask_field.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "mask_field.install.before_install"
# after_install = "mask_field.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "mask_field.uninstall.before_uninstall"
# after_uninstall = "mask_field.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "mask_field.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"mask_field.tasks.all"
#	],
#	"daily": [
#		"mask_field.tasks.daily"
#	],
#	"hourly": [
#		"mask_field.tasks.hourly"
#	],
#	"weekly": [
#		"mask_field.tasks.weekly"
#	],
#	"monthly": [
#		"mask_field.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "mask_field.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "mask_field.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "mask_field.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["mask_field.utils.before_request"]
# after_request = ["mask_field.utils.after_request"]

# Job Events
# ----------
# before_job = ["mask_field.utils.before_job"]
# after_job = ["mask_field.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"mask_field.auth.validate"
# ]
