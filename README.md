# Course_Review_Auth_Management Project Instructions

### How to run locally this project locally

- Go MongoDb Atlas
- Create database
- Go to `network > accessList > click ADD IP ADDRESS > 0.0.0.0/0 (includes your current IP address)`
- Go to `database > connect > drivers > copy mongodb > ( mongodb+srv://<username_Your_database>:<password_Your_database>@cluster0.j1ployz.mongodb.net/?retryWrites=true&w=majority )`

### Clone Project

`git clone https://github.com/Porgramming-Hero-web-course/l2b2a4-course-review-with-auth-aonikpaulalock`

### Go to the project directory

`cd course-review-with-auth`

### Install dependencies

`npm install or i`

### Setup .env File root folder

- PORT=`Your_Port`
- DATABASE_URL= `( mongodb+srv://<Your_Databse_Username>:<Your_Database_Password>@cluster0.j1ployz.mongodb.net/Your_Collection_Name?retryWrites=true&w=majority )`
- SALT_ROUND = `how number of password hash`
- JWT_ACCESS_TOKEN=`Generate your access token`
- JWT_ACCESS_TOKEN_EXPIRE=`Expire time your access token`

### Start the server on the terminal

`npm run dev`

### Open your postman

## User Registration

- Method: POST
- Endpoint: `http://localhost:<Your_Port>/auth/register`
- Description: Register a new user by providing valid user and validates user input and password validate regex.

## User Login

- Method: POST
- Endpoint: `http://localhost:<Your_Port>/auth/login`
- Description: Authenticate and log in a user based on provided login credentials and validates user input and password.

## Change Password

- Method: POST
- Endpoint: `http://localhost:<Your_Port>/auth/change-password`
- Authentication: Requires user or admin authentication.
- Description: Change the password for the authenticated user. validates user password.

## Create a Course

- Methods:Post
- Endpoint:`http://localhost:<Your_Port>/api/course`
- Authentication : Required to admin authentication token.
- Description: Create a new course by providing valid course information.

### Get Paginated and Filtered Courses.

- Method: GET
- Endpoint:`http://localhost:<Your_Port>/api/course`
- Description: Retrieve a list of all available courses in the system and search,filter,pagination etc.

### Create a Category

- Method: POST
- Endpoint:`http://localhost:<Your_Port>/api/categories`
- Authentication: Requires admin authentication.
- Description: Create a new category by providing valid category information and validates input.

### Get All Categories

- Method: GET
- Endpoint: `http://localhost:<Your_Port>/api/categories`
- Description: Retrieve a list of all available categories in the system.

### Create a Review

- Method: POST
- Endpoint:`http://localhost:<Your_Port>/api/reviews`
- Authentication: Requires user authentication
- Description: Create a new review by submitting valid review data. The endpoint is protected, and the user must be authenticated.

### Update a Course (Partial Update with Dynamic Update)
 - Method: PUT
 - Endpoint: `http://localhost:<Your_Port>/api/courses/:courseId`
 - Authentication: Requires admin authentication.
 - Description: Update details of a specific course identified by courseId. The endpoint is protected and can only be accessed by admin. The provided data is validated, upon successful validation and updates to the specified course.


### Get Course by ID with Reviews
- Method: GET
- Endpoint: `http://localhost:<Your_Port>/api/courses/:courseId/reviews`
- Description: Retrieve details of a specific course along with its associated reviews. The endpoint allows fetching reviews related to a specific course identified by courseId.


### Get the Best Course Based on Average Review (Rating)
- Method: GET
- Endpoint: `http://localhost:<Your_Port>/api/course/best`
- Description: Retrieve the best course based on the average review rating. This endpoint allows users to get information about the course that has received the highest average reviews.


❤️ Happy Coding
❤️ Happy Life
