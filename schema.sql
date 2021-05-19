CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    username varchar(25),
    password text,
    street_number integer,
    street_name text,
    city text,
    state varchar(10),
    zipcode varchar(5),
    email varchar(50)
)


CREATE TABLE favorite_spots (
    id SERIAL PRIMARY KEY,
    recently_visited text REFERENCES users(id),
    date_visited timestamp,

    
)


