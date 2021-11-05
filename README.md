# the_simple_blog


<p align="center">
  <img src="https://github.com/gf-teixeira/the_simple_blog/blob/main/public/images/gif01.gif">
</p>

## 🚀 Technologies

- HTML
- CSS
- EJS
- NodeJS: Typescript; Express; pg (node-postgres);
- PostgreSQL

## How to run

- Create a table on postgresql
```SQL 
create table post (
  id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	content VARCHAR(10000) NOT NULL,
	category VARCHAR(2000) NOT NULL, 
	author VARCHAR(255) NOT NULL,
	created_at date DEFAULT CURRENT_DATE
);
```
- Create a config.env file on the root

config.env:

`DATABASE_URL=postgres://db_username:db_password@host:port/db_name`

- Install the dependencies

`npm i`

- Run:

`npm run dev`
