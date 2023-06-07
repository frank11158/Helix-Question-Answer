# Helix-Question-Answer

## Quick Start

### Backend
The backend is writen with Django rest framework in python and the database is MySQL, please follow the below steps to setup.

1. Start MySQL database
2. Copy env.sample to backend root dir and fill in the environment variables

    `cp env.sample .env`

3. Create virtual environment

    `virtualenv env`
    
    `source env/bin/activate`
    
4. Data migration

    `python manage.py makemigrations`
    
    `python manage.py migrate`
    
5. Run server

    `python manage.py runserver`
    
 And now, your backend server is started at port 8000
 
 ### Frontend
 The frontend is writen with React framework, please follow the below steps to setup.
 
 1. `npm install`
 2. `npm start`
 3. Open http://localhost:3000 to view the ticket viewer frontend UI in the browser.

### Demo


https://github.com/frank11158/Helix-Question-Answer/assets/17703676/1b6c9475-eaf7-4a4d-aed2-dca00ed30e2d

