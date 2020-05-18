# Individual_Project

wannna sing a song but, don't remember any lyric of a song?

use this app..

---

> Register

Requests :

method : `POST`

url : `http://localhost:3000/register`

body :

- email: `irwan@gmail.com`
- password : `1234`

## `Success`

Reponds : 

Status : `CREATED`

Code : `201`

~~~
{
    id: 1,
    email: irwan@gmail.com,
    password: 1234
}
~~~

when you try to pass email `without email format`, server will respond like below :

## Error

Status : `Bad Request`

Code : `400`

~~~
{
    invalidEmail: `irwangmailcom is not valid email`
}
~~~

> Login

Requests :

method : `POST`

url : `http://localhost:3000/login`

body :

- email: `irwan@gmail.com`
- password : `1234`

## `Success`

Reponds : 

Status : `OK`

Code : `200`

~~~
{
    access_token: h3ld0q4ncads]129...
}
~~~

when you try to pass an `not registered email`, server will respond like below :

## Error

Status : `Bad Request`

Code : `404`

~~~
{
    err: not found
}
~~~

> Login With Google

Requests :

method : `POST`

url : `http://localhost:3000/google-signin`

you will be direct to google mesage box, and login like other apps you've ever had

## `Success`

Reponds : 

Status : `CREATED`

Code : `201`

~~~
{
    access_token: fasdfafg3425254...
}
~~~

## `Success`

Reponds : 

Status : `OK`

Code : `200`

~~~
{
    access_token: fasdfafg3425254...
}
~~~

when you try to pass email `without email format`, server will respond like below :

## Error

Status : `Bad Request`

Code : `400`

~~~
{
    invalidEmail: `irwangmailcom is not valid email`
}
~~~

> Search song

Requests :

method : `POST`

url : `https://localhost:3000/search_song`,

headers: `access_token`

## `Success`

Reponds : 

Status : `OK`

Code : `200`

~~~
{
    Tulus: `lyrics here`
}
~~~

## Error

Status : `Bad Request`

Code : `400`

~~~
{
    null 
}
~~~

make sure your artist_name and song_title are descriptive, server doesn't receive your data if you input either of that with invalid input 


`Tulus - It's Correct`

`Tuls - It's Not Correct` 


> Recent

Requests :

method : `POST`

url : `https://localhost:3000/recent`,

headers: `access_token`

## `Success`

Reponds : 

Status : `OK`

Code : `200`

~~~
{
    give you all data you've ever find a search song input
}
~~~

## Error

Status : `Internal Server`

Code : `500`

~~~
{
    null 
}
~~~

system error

