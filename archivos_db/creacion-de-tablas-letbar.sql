create table users (
id INT primary key auto_increment not null,
first_name varchar(20) not null,
last_name varchar(20) not null,
email varchar(50) not null,
password varchar(100) not null,
tel int not null,
avatar varchar(100) not null,
birthday date not null
);	

create table users_categories (
id INT primary key auto_increment not null,
user_type varchar(20) not null
);	

alter table users 
add category_id int not null;

create table addresses (
id INT primary key auto_increment not null,
province varchar(20) not null,
locality varchar(20) not null,
street varchar(50) not null,
street_number int not null,
comments varchar(200) not null,
user_id int not null,
address_alias varchar(20) not null
);	

create table users_payments(
id INT primary key auto_increment not null,
payment_method_id varchar(20) not null,
user_id varchar(20) not null
);

create table payment_methods(
id INT primary key auto_increment not null,
name varchar(20) not null
);

create table payment_methods_data(
id INT primary key auto_increment not null,
card_number int(16),
card_bank varchar(20),
owner varchar(50),
cbu int(50),
mp_alias varchar(50),
mp_cvu int(50),
payment_id int(16)
);

create table shopping_carts(
id INT primary key auto_increment not null,
user_id int(50) not null,
product_id int(20) not null,
status varchar(50) not null,
payment_method_id int(20) not null
);

create table products (
id INT primary key auto_increment not null,
name varchar(50) not null,
description varchar(200) not null,
image varchar(50) not null,
category_id int(20) not null,
brand varchar(20) not null,
size varchar(100) not null,
priceUnit decimal not null,
cantDisc int(20), 
priceCant decimal,
offer boolean not null,
year int,
stock int not null,
graduation decimal,  
cantValoration decimal, 
acuValoration int,
valoration decimal
);	


create table product_categories(
id INT primary key auto_increment not null,
category varchar(50) not null,
name varchar(50) not null,
icon varchar(50) not null
);













