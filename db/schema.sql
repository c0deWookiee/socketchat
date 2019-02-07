DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS rooms
DROP TABLE IF EXISTS messages

create table clients (
    client_id serial PRIMARY_KEY, 
    username varchar(20), 
    password varchar(14), 
    email varchar(50), 
    rooms text[], 
    avatar varchar(250));

create table rooms (
    rooms_id serial PRIMARY_KEY,
    room varchar(25));

create table messages (
    message_id serial PRIMARY_KEY,
    username varchar(20),
    message varchar(900),
    room varchar(25),
    date_sent current_time,
);

create table messages_rooms (
    message_id int references messages (message_id) ON UPDATE CASCADE ON DELETE CASCADE
,   rooms_id int references rooms (rooms_id) ON UPDATE CASCADE ON DELETE CASCADE
, CONSTRAINT rooms_messages_pkey PRIMARY_KEY (rooms_id, messages_id)
)



