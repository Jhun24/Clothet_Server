# Clothet_Server

# Schema 

### user

    name:String
    id:String
    password:String
    token:String

### post

    token:String
    content:String
    title:String
    img:String
    like:String
    
### shop

    name:String
    category:String
    color:String
    size:String
    img:String
    clothToken:String
    
### saveCloth

    name:String
    category:String
    color:String
    size:String
    img:String
    token:String

### userClothet

    userToken:String
    name:String
    color:String
    size:String
    category:String
    img:String

# /auth

### POST : /auth/login

> require

    id : 유저 id
    
    ps : 유저 password
    
> response

    userData Json(user 스키마 참조)
    
### POST : /auth/register

> require

    id : 유저 id
    
    ps : 유저 password
    
    name : 유저 이름
    
> response

    userData Json(user 스키마 참조)
    
# facebook

### POST : /fb/write

> require

    image File (name : imgaes)
    
    title : 글 제목
    
    content : 글 내용
    
> response

    Server code : 200
    
### GET : /fb/list

> require
    
    데이터를 받지 않습니다

> response

    DB에 데이터가 없으면 Server Code 404
    
    postData (post Schema 참고

### GET : /fb/ddabap

> require
    
    postToken : 글 토큰
    
    shangus : true = 따봉 + 1 false = 따봉 - 1
    
> response
    
    글이 없을시 Server code 404
    
    성공시 Server code 200

### POST : /fb/save

> require 
    
    name : 옷 이름
    
    color : 옷 색상
    
    category : 옷 카테고리
    
    size : 옷 크기
    
    userToke : 유저 토큰
    
    imageFile : (name : images)
    
> response    
    
    userClothetData (json) (userClothet 참고) 
    

# /SHOP

### GET : /shop/list

> require 
    
    데이터를 받지 않습니다
    
> response

    DB가 비어있으면  Server code 404
    
    shopData (shop Schema 참고)

### /shop/add

> 관리자 클라용 쿼리

 
> require
    쓰기 귀찮
    
### POST : /shop/save

> require

    clothToken : 옷 토큰
    
    userToken : 유저 토큰
    
> response

    옷이 없으면 Server code 404
    
    성공시 Server code 200