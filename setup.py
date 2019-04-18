from setuptools import setup

setup(
    name='academicly',
    packages=['academicly'],
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-security',
        'flask-sqlalchemy',
        'flask-cors',
        'SQLAlchemy',
        'bcrypt'
    ]
)
