DROP TABLE messages_rooms ;
DROP TABLE clients ;
DROP TABLE rooms ;
DROP TABLE messages ;

create table clients (
    client_id serial PRIMARY KEY, 
    username varchar(20), 
    password varchar(14), 
    email varchar(50), 
    rooms text[], 
    avatar varchar(250)
);

create table rooms (
    rooms_id serial PRIMARY KEY,
    room varchar(25)
);

create table messages (
    message_id serial PRIMARY KEY,
    username varchar(20),
    message varchar(900),
    room varchar(25),
    date_sent timestamp
);

create table messages_rooms (
    message_id int references messages (message_id) ON UPDATE CASCADE ON DELETE CASCADE
,   rooms_id int references rooms (rooms_id) ON UPDATE CASCADE ON DELETE CASCADE
, CONSTRAINT rooms_messages_pkey PRIMARY KEY (rooms_id, message_id)
);



