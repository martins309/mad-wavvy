CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(100),
    password varchar(100),
    street number integer,
    street name text,
    city text,
    state varchar(2),
    zipcode integer 
)


CREATE TABLE favorite_spots (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES user (id),
)


