# Project requirements:

### Angular
For angular basic requirement is nodejs + npm

https://nodejs.org/en/download/

For a second step we need to install angular.

npm install -g @angular/cli

Angular is recomended to be installed globbaly(due to bugs XD)

And for the last step u just need to install project dependencies.
The command need to be lunched in the same folder as package.json

npm update

And thats it. For running angular u just need command

ng serve

### Django

Basic requirements for django is pip + python. recommended python for this project is pyton 3.6
It is strongly recommended to install dependencies via virtualenv.

docs: https://virtualenv.pypa.io/en/stable/
Some of those commands need to be done from django root folder: DjangoRest
1. Install Django: pip install -e django/
2. install dependencies pip install -r requirements.txt
3. Create db migrations: python manage.py makemigrations
                         python manage.py migrate
4. it is strongly recommended to create superuser: python manage.py createsuperuser
5. now u just need to run django application via command: python manage.py runserver


Created by Laco Smokowski