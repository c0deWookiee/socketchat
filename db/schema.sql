DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS rooms
DROP TABLE IF EXISTS messages

create table users (
    user_id serial PRIMARY_KEY, 
    username varchar(20), 
    password varchar(14), 
    email varchar(50), 
    rooms text[], 
    avatar varchar(250));

create table rooms (
    room_id serial PRIMARY_KEY,
    room varchar(25));

create table messages (
    message_id serial PRIMARY_KEY,
    username varchar(20),
    message varchar(900),
    room varchar(25),
    date_sent current_time,
);
inner join users from rooms

