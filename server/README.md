# Individual_Project

### Show Anime List
*   Url : 

        /anime

*   Method : 

        "GET"

*   Url params : 

        Header : Token

*   Data params :

        None

*   Succes Response :

        ```
        Code : 200
        Content : {
                "Anime": [
                {
                "id": 1,
                "title": "Boku No Hero Academia",
                "released_date": "2015-05-15",
                "genre": "School, Comedy, Supranatural",
                "rating": 8.5,
                "url": "https://www.imdb.com/title/tt5626028/",
                "UserId": 1,
                "createdAt": "2020-05-09T11:30:57.779Z",
                "updatedAt": "2020-05-09T11:30:57.779Z",
                "User": {
                        "id": 1,
                        "name": "User Name",
                        "birthdate": "User Birthdate",
                        "gender": "Male",
                        "password": "User Password",
                        "email": "User Email",
                        "createdAt": "2020-05-09T11:30:36.817Z",
                        "updatedAt": "2020-05-09T11:30:36.817Z"
                }
             }
           ]
        }
        ```

*   Error Response :

        ```
        Code : 500
        Content : "Something Went Wrong"
        ```

*   Sample Call :

        ```
        axios({
            url: "/anime",
            headers: "token",
            type : "get",
            success : function(result) {
                res.status(200).json({
                    Anime : result
                })
            }
        });
        ```

### Create Anime List
*    Url :
    
        /anime
        
*    Method : 

        "POST"
    
*   URL PARAMS :

        headers : token

*   DATA PARAMS :

        ```
        title : string
        released_date : date
        genre : string
        rating : integer
        url : string
        ```

*   Succes Response :

        ```
        code : 201
        content : {
                "Anime": {
                    "id": 1,
                    "title": "Boku No Hero Academia",
                    "released_date": "2015-05-15",
                    "genre": "School, Comedy, Supranatural",
                    "rating": 8.5,
                    "url": "https://www.imdb.com/title/tt5626028/",
                    "UserId": 1,
                    "updatedAt": "2020-05-09T11:30:57.779Z",
                    "createdAt": "2020-05-09T11:30:57.779Z"
                }
        }
        ```

*   Error Response : 

        ```
        Code : 500,
        Content : "Something Went Wrong"
        ```

*   Sample Call :

        ```
        axios({
            url: "/anime",
            headers: "token",
            type : "post",
            success : function(result) {
                res.status(200).json({
                    Anime : result
                })
            }
        });
        ```

### Show anime list by id
*    Url :
    
        /anime/:id
        
*    Method : 

        "GET"
    
*   URL PARAMS :

        ```
        id : Integer
        headers : token
        ```

*   DATA PARAMS :

        ```
        title : string
        released_date : date
        genre : string
        rating : integer
        url : string
        ```

*   Succes Response :

        ```
        code : 200
        content : {
                "Anime": {
                    "id": 1,
                    "title": "Boku No Hero Academia",
                    "released_date": "2015-05-15",
                    "genre": "School, Comedy, Supranatural",
                    "rating": 8.5,
                    "url": "https://www.imdb.com/title/tt5626028/",
                    "UserId": 1,
                    "updatedAt": "2020-05-09T11:30:57.779Z",
                    "createdAt": "2020-05-09T11:30:57.779Z"
                }
        }
        ```

*   Error Response : 

        ```
        Code : 500,
        Content : "Something Went Wrong"
        ```

*   Sample Call :

        ```
        axios({
            url: "/anime/1",
            headers: "token",
            type : "get",
            success : function(result) {
                res.status(200).json({
                    Anime : result
                })
            }
        });
        ```

### Delete Anime From List

*    Url : 

        /anime/:id

*   Method : 

        "Delete"

*   URL PARAMS :

        ```
        Id : Integer
        Headers : Token
        ```

*   DATA PARAMS : 

        None

*   Succes Response :
        
        ```
        Code : 200
        Content : "Succes Destroy Anime with id 1"
        ```

*   Error Response :

        ```
        code : 500
        Content : "Something Went Wrong"
        ```

*   Sample Call : 
        ```
        axios({
            url: "/anime",
            headers: "token",
            type : "post",
            success : function(result) {
                res.status(200).json({
                    Anime : result
                })
            }
        });
        ```

### login user

*       Url : 

        /user/login

*       Method : 

        "POST"

*       URL PARAMS :

        NONE

*       DATA PARAMS :

        ```
        Email : String
        Password : String
        ```

*       Succes Response :

        ```
        Code : 202
        Content : {
                "acces_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b2RqaUBnbWFpbC5jb20iLCJpYXQiOjE1ODkwMTgwNjN9.7E4qqO1rVh1ml0gpkSLaWwvG4upJy0ctq6kuUUnfV_Q"
                }
        ```

*       Error Response :

        ```
        Code : 400
        Content : "Email/Password doesn't match"
        ```

*       Sampe Call : 

        ```
        axios({
                url : "user/login"
                method : "POST"
                data : {
                        email : "YOUR EMAIL"
                        password : "YOUR PASSWORD"
                }
                Succes : Function(result){
                        res.status(202).json({
                                acces_token : token
                        })
                }
        })
        ```

### google-login user

*       Url : 

        /user/google-login

*       Method : 

        "POST"

*       URL PARAMS :

        google_token : token

*       DATA PARAMS :

        None

*       Succes Response :

        ```
        Code : 202
        Content : {
                "acces_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b2RqaUBnbWFpbC5jb20iLCJpYXQiOjE1ODkwMTgwNjN9.7E4qqO1rVh1ml0gpkSLaWwvG4upJy0ctq6kuUUnfV_Q"
                }
        ```

*       Error Response :

        ```
        Code : 500
        Content : "Something Went Wrong"
        ```

*       Sampe Call : 

        ```
        axios({
                url : "user/google-login"
                method : "POST"
                headers : {
                        google_token : token
                },
                Succes : Function(result){
                        res.status(202).json({
                                acces_token : token
                        })
                }
        })
        ```

###     3rd Api Collect data

*       Url :

        /anime/top

*       Method :

        "get"

*       Url Params : 

        Headers : token

*       Data Params : 

        None

*       Succes Response :

        ```
        Code : 200
        content : 
                "top": [
                        {
                        "mal_id": 40591,
                        "rank": 1,
                        "title": "Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen",
                        "url": "https://myanimelist.net/anime/40591/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen",
                        "image_url": "https://cdn.myanimelist.net/images/anime/1764/106659.jpg?s=aab19d0f19e345e223dc26542ac3a28f",
                        "type": "TV",
                        "episodes": 12,
                        "start_date": "Apr 2020",
                        "end_date": {},
                        "members": 237084,
                        "score": 8.82
                        },
                ]
        ```

*       Error Response :
        
        ```
        Code : 500,
        Content : "Something Went Wrong"
        ```

*       Sample Call :
        
        ```
        axios({
                url : /anime/top
                method : get
                headers : token
                succes : function(result){
                        res.status(200).json({
                                Anime : result
                        })
                }
        })
        ```