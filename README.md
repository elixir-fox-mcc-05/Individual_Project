# MUVI

Hello! Welcome to MUVI!<br>
MUVI provide you the most up-to-date movies and tv-series information.<br>
Below are the list of URL that you can use<br>

| URL                           | Method        |
| -------------                 |:-------------:|
| /users/register               | POST          |
| /users/login                  | POST          |
| /users/google-login           | GET           |
| /dashboard/movie/popular      | POST          |
| /dashboard/movie/top_rated    | POST          |
| /dashboard/movie/now_playing  | POST          |
| /dashboard/movie/:id          | GET           |
| /dashboard/tv/popular         | POST          |
| /dashboard/tv/top_rated       | POST          |
| /dashboard/tv/now_playing     | POST          |
| /dashboard/tv/:id             | GET           |

<br><br>

-----
## /users/register
-----
* method: POST
* purpose: Register account for new user
* req.body: <br>
    ```javascript
        {
            "name": "tina",
            "email": "tina@contoh.com",
            "password": "abcdef",
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
    ```javascript
        {
            "User": {
                "id": 16,
                "name": "tina",
                "email": "tina@contoh.com",
            },
            "notif": "Register successful!"
        }
    ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input name with minimum 3 characters"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input the correct email"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input password from 6-20 characters"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please make sure your email never registered here before"
    }
    ```

    OR
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /users/login
-----
* method: POST
* purpose: Login into user account
* req.body: <br>
    ```javascript
        {
            "username": "tono@contoh.com",
            "password": "xxxxxx"
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec",
            'user': {
                'id': 21,
                'name': 'tono',
                'email': 'tono@contoh.com'    
            },
            "notif": "Welcome back tono!"
        }
    ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input registered email",
        }
    ```

    OR

    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input correct password",
        }
    ```

    OR
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /users/google-login
-----
* method: GET
* purpose: Login into user account using Google Account
* req.body: <br>
    ```javascript
        {
            "username": "tono@contoh.com",
            "password": "xxxxxx"
        }
    ```
* success response: <br>
    * code: 200 or 201 <br>
    * content: <br>
    ```javascript
        {
            'token': 'xxx',
            'user': {
                'id': 21,
                'name': 'Contoh Nama',
                'email': 'contohnama@gmail.com'    
            },
            'notif': 'Login Success!'
        }
    ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /dashboard/movie/popular
-----
* method: POST
* purpose: get list of most popular movies
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request body: <br>
    ```javascript
        {
            "page": 1,
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
            "PopularMovieList": [
                {
                "popularity": 47.272,
                "vote_count": 9156,
                "video": false,
                "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
                "id": 299537,
                "adult": false,
                "backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
                "original_language": "en",
                "original_title": "Captain Marvel",
                "genre_ids": [
                    28,
                    12,
                    878
                ],
                "title": "Captain Marvel",
                "vote_average": 7,
                "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
                "release_date": "2019-03-06"
                },
                .....
            ]
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /dashboard/movie/top_rated
-----
* method: POST
* purpose: get list of top rated movies
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request body: <br>
    ```javascript
        {
            "page": 3,
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
            "TopRatedMovieList": [
                {
                "page": 3,
                "total_results": 7247,
                "total_pages": 363,
                "results": [
                    {
                    "popularity": 15.724,
                    "id": 18148,
                    "video": false,
                    "vote_count": 472,
                    "vote_average": 8.4,
                    "title": "Tokyo Story",
                    "release_date": "1953-11-03",
                    "original_language": "ja",
                    "original_title": "東京物語",
                    "genre_ids": [
                        18
                    ],
                    "backdrop_path": "/jLq0ol1f0ZKXni9R9GsPBcyPrNN.jpg",
                    "adult": false,
                    "overview": "The elderly Shukishi and his wife, Tomi, take the long journey from their small seaside village to visit their adult children in Tokyo. Their elder son, Koichi, a doctor, and their daughter, Shige, a hairdresser, don't have much time to spend with their aged parents, and so it falls to Noriko, the widow of their younger son who was killed in the war, to keep her in-laws company.",
                    "poster_path": "/g2YbTYKpY7N2yDSk7BfXZ18I5QV.jpg"
                    },
                    ...
            ]
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /dashboard/movie/now_playing
-----
* method: POST
* purpose: get list of ongoing movies
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request body: <br>
    ```javascript
        {
            "page": 2,
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
            "NowPlayingMovieList": [
                {
                "page": 3,
                "total_results": 7247,
                "total_pages": 363,
                "results": [
                    {
                        "popularity": 179.924,
                        "vote_count": 879,
                        "video": false,
                        "poster_path": "/33VdppGbeNxICrFUtW2WpGHvfYc.jpg",
                        "id": 481848,
                        "adult": false,
                        "backdrop_path": "/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg",
                        "original_language": "en",
                        "original_title": "The Call of the Wild",
                        "genre_ids": [
                            12,
                            18,
                            10751
                        ],
                        "title": "The Call of the Wild",
                        "vote_average": 7.3,
                        "overview": "Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.",
                        "release_date": "2020-02-19"
                    },
                    ...
                ]
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /dashboard/movie/:id
-----
* method: GET
* purpose: get detail info of movie base on its id
* request params: id
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
            {
            "Detail": {
                "adult": false,
                "backdrop_path": "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
                "belongs_to_collection": {
                    "id": 10,
                    "name": "Star Wars Collection",
                    "poster_path": "/r8Ph5MYXL04Qzu4QBbq2KjqwtkQ.jpg",
                    "backdrop_path": "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
                    },
                "budget": 250000000,
                "genres": [
                    {
                        "id": 28,
                        "name": "Action"
                    },
                    {
                        "id": 12,
                        "name": "Adventure"
                    },
                    {
                        "id": 878,
                        "name": "Science Fiction"
                    }
                ],
                "homepage": "https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker",
                "id": 181812,
                "imdb_id": "tt2527338",
                "original_language": "en",
                "original_title": "Star Wars: The Rise of Skywalker",
                "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
                "popularity": 128.4,
                "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
                "production_companies": [
                    {
                        "id": 1,
                        "logo_path": "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
                        "name": "Lucasfilm",
                        "origin_country": "US"
                    },
                    {
                        "id": 11461,
                        "logo_path": "/p9FoEt5shEKRWRKVIlvFaEmRnun.png",
                        "name": "Bad Robot",
                        "origin_country": "US"
                    },
                    {
                        "id": 2,
                        "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
                        "name": "Walt Disney Pictures",
                        "origin_country": "US"
                    },
                    {
                        "id": 120404,
                        "logo_path": null,
                        "name": "British Film Commission",
                        "origin_country": ""
                    }
                ],
                "production_countries": [
                    {
                        "iso_3166_1": "US",
                        "name": "United States of America"
                    }
                    ],
                    "release_date": "2019-12-18",
                    "revenue": 1073604458,
                    "runtime": 142,
                    "spoken_languages": [
                    {
                        "iso_639_1": "en",
                        "name": "English"
                    }
                ],
                "status": "Released",
                "tagline": "Every generation has a legend",
                "title": "Star Wars: The Rise of Skywalker",
                "video": false,
                "vote_average": 6.5,
                "vote_count": 4455
                }
            }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>





## /dashboard/tv/popular
-----
* method: POST
* purpose: get list of most popular tv series
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request body: <br>
    ```javascript
        {
            "page": 1,
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
            {
            "PopularTvSeriesList": {
                "page": 1,
                "total_results": 10000,
                "total_pages": 500,
                "results": [
                {
                    "original_name": "The Flash",
                    "genre_ids": [
                    18,
                    10765
                    ],
                    "name": "The Flash",
                    "popularity": 193.578,
                    "origin_country": [
                    "US"
                    ],
                    "vote_count": 4287,
                    "first_air_date": "2014-10-07",
                    "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
                    "original_language": "en",
                    "id": 60735,
                    "vote_average": 7.2,
                    "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
                    "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
                },
                ...
                ]
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /dashboard/tv/top_rated
-----
* method: POST
* purpose: get list of top rated tv series
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request body: <br>
    ```javascript
        {
            "page": 1,
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        "TopRatedTvSeriesList": {
            "page": 1,
            "total_results": 877,
            "total_pages": 44,
            "results": [
                {
                    "original_name": "I Am Not an Animal",
                    "genre_ids": [
                        16,
                        35
                    ],
                    "name": "I Am Not an Animal",
                    "popularity": 10.696,
                    "origin_country": [
                        "GB"
                    ],
                    "vote_count": 449,
                    "first_air_date": "2004-05-10",
                    "backdrop_path": null,
                    "original_language": "en",
                    "id": 100,
                    "vote_average": 9.4,
                    "overview": "I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.",
                    "poster_path": "/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg"
                },
                .....
            ]
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /dashboard/tv/now_playing
-----
* method: POST
* purpose: get list of ongoing tv series
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request body: <br>
    ```javascript
        {
            "page": 1,
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
            {
            "NowPlayingTvSeriesList": {
                "page": 1,
                "total_results": 427,
                "total_pages": 22,
                "results": [
                {
                    "original_name": "The Flash",
                    "genre_ids": [
                            18,
                            10765
                        ],
                    "name": "The Flash",
                    "popularity": 193.578,
                    "origin_country": [
                        "US"
                        ],
                    "vote_count": 4287,
                    "first_air_date": "2014-10-07",
                    "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
                    "original_language": "en",
                    "id": 60735,
                    "vote_average": 7.2,
                    "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
                    "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
                },
                .....
                ]}
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /dashboard/tv/:id
-----
* method: GET
* purpose: get detail info of tv series base on its id
* request params: id
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
        "Detail": {
            "backdrop_path": "/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg",
            "created_by": [
            {
                "id": 117443,
                "credit_id": "525743f5760ee36aaa0e0ff8",
                "name": "Dick Wolf",
                "gender": 2,
                "profile_path": null
            }
            ],
            "episode_run_time": [
            43
            ],
            "first_air_date": "1999-09-20",
            "genres": [
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 18,
                "name": "Drama"
            }
            ],
            "homepage": "http://www.nbc.com/law-and-order-special-victims-unit",
            "id": 2734,
            "in_production": true,
            "languages": [
            "en"
            ],
            "last_air_date": "2020-04-23",
            "last_episode_to_air": {
            "air_date": "2020-04-23",
            "episode_number": 20,
            "id": 2237661,
            "name": "Hollywood Advice",
            "overview": "The Viv goes to meet Hollywood legend, Bruce Vilanch! He’s the diva whisperer who has worked with all the greats in this town – Elizabeth Taylor,Bette Midler, and CHER! Bruce will coach Viv on what it really takes to become a true Hollywood diva.",
            "production_code": "",
            "season_number": 21,
            "show_id": 2734,
            "still_path": "/oWhVvNit4iIcwdmtUSg7FR8qpYm.jpg",
            "vote_average": 0,
            "vote_count": 0
            },
            "name": "Law & Order: Special Victims Unit",
            "next_episode_to_air": null,
            "networks": [
            {
                "name": "NBC",
                "id": 6,
                "logo_path": "/o3OedEP0f9mfZr33jz2BfXOUK5.png",
                "origin_country": "US"
            }
            ],
            "number_of_episodes": 478,
            "number_of_seasons": 21,
            "origin_country": [
            "US"
            ],
            "original_language": "en",
            "original_name": "Law & Order: Special Victims Unit",
            "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
            "popularity": 121.071,
            "poster_path": "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
            "production_companies": [
            {
                "id": 25545,
                "logo_path": null,
                "name": "Wolf Films",
                "origin_country": "US"
            },
            {
                "id": 26727,
                "logo_path": "/jeTxdjXhzgKZyLr3l9MllkTn3fy.png",
                "name": "Universal Television",
                "origin_country": "US"
            },
            {
                "id": 16642,
                "logo_path": null,
                "name": "USA Network",
                "origin_country": "US"
            }
            ],
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>