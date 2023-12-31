﻿# drf-react-native
# About the app.
This is a simple application, that collects some data from a user and saves the data into a database using Django restframework. 
To run the application the application:
1. Clone the repository.
2. While in the root folder of the project, create a virtual environment
```python
python3 -m venv env
#activate the virtual environment
#on windows
env\Scripts\activate

#on Linux
source env/bin/activate
``````
3. Install the dependencies
```shell
pip install -r requirements.txt
python manage.py createsuperuser #create a super user.
``````
4. Run the DRF project
```shell
python manage.py runserver 0.0.0.0:8000
````
5. Run the React native project
```shell
> cd data-collection
> npm install   #install dependencies
> expo start
``````
6. Fetch your machine IP:
```shell
ipconfig
``````
7. Change the IP in the file data-collection/components/DataCollectionScreen.js under the fetch function with the ip4 fetched in step 6. 
8. access the UI of the app using the method convenient to you, and input some data.
9. To check on the data updates, access the admin dashboard accessible on: say the your machine's ip is http://172.16.2.198 then the dashboard is accessible on http://172.16.2.198:8000/admin ;; use the details set in step 3.
