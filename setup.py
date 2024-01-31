from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in mask_field/__init__.py
from mask_field import __version__ as version

setup(
	name="mask_field",
	version=version,
	description="The \"mask\" field type is a type of input field used to apply specific formatting rules to the entered values. It allows you to specify a specific pattern for input, making it easier to format the data in a specific way.",
	author="Albashq Alshwmy",
	author_email="al.alshwmy@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
