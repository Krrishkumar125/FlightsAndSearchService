# Welcome to Flights Service

## Project Setup

-Clone the project on your local
-Execute `npm install` on the same path as of your root directory of the downloaded project
-Create a `.env` file in the root directory and add the following environment variable
    -PORT=3000
-Inside the `src/config` create a new file `config.json` and add the followuing piece of code

```json
{
  "development": {
    "username": "<Your_Login_name>",
    "password": "<Your_DB_Password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
