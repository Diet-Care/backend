# BACKEND
BBuild Web Server and RESTful API with Express.js 

url = https://backend-production-2c47.up.railway.app/

pertama untuk bisa akses harus memasukkan endpoint berikut ${url}
hasilnya akan seperti ini
- response
```json 
  hallo sir/miss, welcome you have successfully run this endpoint
```

jika tidak menemukan endpoint yang dicari maka akan tampil seperti ini
- response
```json 
  Endpoint not found
```
selanjutnya untuk mengetes API silahkan dicoba 

## endpoint API
url = https://backend-production-2c47.up.railway.app/
### authentikasi
ini bagian authentikasi :
1. register  = method post = https://backend-production-2c47.up.railway.app/auth/register 
2. login  = method post = https://backend-production-2c47.up.railway.app/login
3. changepassword  = method put = https://backend-production-2c47.up.railway.app/users?email={email_users}

### users
1. getaallUser = method get = https://backend-production-2c47.up.railway.app/users  
2. getUserid = method get = https://backend-production-2c47.up.railway.app/users/{id_users} 
3. updateusers = method put = https://backend-production-2c47.up.railway.app/users/{uuid_users} 
4. deleteusers = method delete = https://backend-production-2c47.up.railway.app/users/{uuid_users} 

### olahraga
1. getallolahraga = method get = https://backend-production-2c47.up.railway.app/olahraga
2. getidolahraga = method get = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}
3. createolahraga = method post = https://backend-production-2c47.up.railway.app/olahraga
4. updateolahraga = method put = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}
5. deleteolahraga = method delete = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}
5. deleteallkategori = method delete = https://backend-production-2c47.up.railway.app/olahraga

### makanan
1. getallmakanan = method get = https://backend-production-2c47.up.railway.app/makanan
2. getidmakanan = method get = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}
3. createmakanan = method post = https://backend-production-2c47.up.railway.app/makanan
4. updatemakanan = method put = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}
5. deletemakanan = method delete = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}
5. deleteallmakanan = method delete = https://backend-production-2c47.up.railway.app/makanan

### comment olahraga
1. getallcomment = method get = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment
2. getidcomment = method get = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment/{uuid_comment}
3. createcomment = method post = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment
4. updatecomment = method put = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment/{uuid_comment}
5. deletecommentbyid = method delete = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment/{uuid_comment}
6. deleteallcomment = methode delete = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment

### comment makanan
1. getallcomment = method get = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment
2. getidcomment = method get = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment/{uuid_comment}
3. createcomment = method post = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment
4. updatecomment = method put = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment/{uuid_comment}
5. deletecommentbyid = method delete = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment/{uuid_comment}
6. deleteallcomment = methode delete = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment

### contact us
1. getallpesan = method get = https://backend-production-2c47.up.railway.app/kontak
2. getidpesan = method get = https://backend-production-2c47.up.railway.app/kontak/{uuid_kontak}
3. createpesan = method post = https://backend-production-2c47.up.railway.app/kontak
4. updatepesan = method put = https://backend-production-2c47.up.railway.app/kontak/{uuid_kontak}
5. deletepesanbyid = method delete = https://backend-production-2c47.up.railway.app/kontak/{uuid_kontak}
6. deleteallpesan = method delete = https://backend-production-2c47.up.railway.app/kontak

### jadwal diet
1. getalljadwal = method get = https://backend-production-2c47.up.railway.app/jadwaldiet
2. getidjadwal = method get = https://backend-production-2c47.up.railway.app/jadwaldiet/{uuid_jadwal}
3. createjadwal = method post = https://backend-production-2c47.up.railway.app/jadwaldiet
4. updatejadwal = method put = https://backend-production-2c47.up.railway.app/jadwaldiet/{uuid_jadwal}
5. deletejadwalbyid = method delete = https://backend-production-2c47.up.railway.app/jadwaldiet/{uuid_jadwal}
6. deletealljadwal = method delete = https://backend-production-2c47.up.railway.app/jadwaldiet

<!-- tambahin lagi bang ali seperti comment, jadwaldiet, kontak  -->
## AUTHORIZATION
Request :
- Header :
    - "Authorization" : "Bearer token"


## register

Request :

- Method : POST
- Endpoint : https://backend-production-2c47.up.railway.app/auth/register

- Header :
      - Content-Type: application/json
      - Accept: application/json

- Body :
```json  
{
    "name": "string",
    "email": "string",
    "password": "string"
}
```

Response :
```json  
{
  "status": "SUCCESS",
    "message": "Create Users",
    "data": {
      "uuid" : "uuid",
      "name": "string",
      "email": "string",
      "password": "string",
      "role": "string",
    }
}
```

## LOGIN

Request :

- Method : POST
- Endpoint : https://backend-production-2c47.up.railway.app/login
- Header :
      - Content-Type: application/json
      - Accept: application/json

- Body :
```json  
{
    "email": "string",
    "password": "string"
}
```

Response :
```json  
{
    "token": "<token>"
}
```
## CHANGEPASSWORD

Request :

- Method : PUT
- Endpoint : https://backend-production-2c47.up.railway.app/users?email={email_users}
- Header :
      - Content-Type: application/json
      - Accept: application/json

- Body :
```json  
{
    "password": "string"
}
```

Response :
```json  
{
    "status": "SUCCESS",
    "message": "success Reset Password"
}
```

## GET ALL user role = admin
yang bisa akses hanya admin

Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/users
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
- Response : 
    
```json
  {
     "meta": {
              "integer"
    },
      "data": {
          "uuid": "uuid",
          "name": "string",
          "email": "string",
          "password": "string",
          "role": "string",
          "gender": "string",
          "umur": "string",
          "geografis": "string",
          "profesi": "string",
          "alamat": "string",
          "img_profile": "string"
    }
  }
```
## GET id user role = admin
yang bisa akses hanya admin

Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/users/{user_id}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
- Response : 
    
```json
  {
      "data": {
          "name": "string",
          "email": "string",
          "role": "string",
          "gender": "string",
          "umur": "string",
          "geografis": "string",
          "profesi": "string",
          "alamat": "string",
          "img_profile": "string"
      }
  }
```

## Update user = role user

Request :

- Method : PUT
- Endpoint : https://backend-production-2c47.up.railway.app/user/{id_user}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
- Body : 
```json
     { 
        "name": "string",
        "email": "string",
        "gender": "string",
        "umur": "string",
        "geografis": "string",
        "profesi": "string",
        "alamat": "string",
        "img_profile": "string"
    }
```
    
- Response : 
    
```json
  {
    "status": "SUCCESS",
    "message": "Sucess Update User",
  }
```

## Delete user = role admin
yang bisa akses hanya admin

Request :

- Method : DELETE
- Endpoint : https://backend-production-2c47.up.railway.app/user/{uuid_user}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
     
- Response : 
    
```json
  {
    "message": "Success User Delete"
  }
```

## create olahraga = role admin

Request :

- Method : CREATE
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Body : 
    - form-data
    ```json
        { 
            "judul": "string",
            "deskripsi_singkat": "string",
            "deskripsi_lengkap": "string",
            "img": "file",
            "tips": "string",
            "jumlah_kalori": "integer",
            "level": "string",
            "kategori": "string"
        }
    ```
    
- Response : 
    
```json
  {
    "status": "Success",
    "message": "Create Sport",
    "data": {
        "uuid": "string",
        "judul": "string",
        "deskripsi_singkat": "string",
        "deskripsi_lengkap": "string",
        "tips": "string",
        "img": "string",
        "jumlah_kalori": "integer",
        "level": "string",
        "kategori": "string"
    }
  }
```

## GET ALL olahraga = role admin && user

Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga
- Header :
    - Content-Type: application/json
    - Accept: application/json
    
- Response : 
    
```json
  {
     "meta": {
              "integer"
    },
      "data": {
        "uuid": "string",
        "judul": "string",
        "deskripsi_singkat": "string",
        "deskripsi_lengkap": "string",
        "img": "string",
        "tips": "string",
        "jumlah_kalori": "integer",
        "level": "string",
        "kategori": "string"
    }
  }
```

## GET id olahraga role = admin && user

Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{olahraga_id}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    
- Response : 
    
```json
  {
      "data": {
        "uuid": "string",
        "judul": "string",
        "deskripsi_singkat": "string",
        "deskripsi_lengkap": "string",
        "img": "string",
        "tips": "string",
        "jumlah_kalori": "integer",
        "level": "string",
        "kategori": "string"
    }
  }
```



## Update olahraga = role admin

Request :

- Method : PUT
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{olahraga_id}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Body : 
    - form-data
    ```json
        { 
            "judul": "string",
            "deskripsi_singkat": "string",
            "deskripsi_lengkap": "string",
            "img": "file",
            "tips": "string",
            "jumlah_kalori": "integer",
            "level": "string",
            "kategori": "string"
        }
    ```
    
- Response : 
    
```json
  {
    "status": "Success",
    "message": "Update Sport Success"
  }
```

## Delete olahraga = role admin

Request :

- Method : DELETE
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{olahraga_id}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Response : 
    
```json
  {
    "message": "Sport Has Been Delete",
    "img": {
        "result": "ok"
    }
  }
```

## create makanan = role admin

Request :

- Method : POST
- Endpoint : https://backend-production-2c47.up.railway.app/makanan
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Body : 
    - form-data
    ```json
        { 
            "judul": "string",
            "deskripsi_singkat": "string",
            "deskripsi_lengkap": "string",
            "img": "file",
            "tips": "string",
            "jumlah_kalori": "integer",
            "level": "string",
            "kategori": "string"
        }
    ```
    
- Response : 
    
```json
  {
    "status": "Success",
    "message": "Create Foods",
    "data": {
        "uuid": "string",
        "judul": "string",
        "deskripsi_singkat": "string",
        "deskripsi_lengkap": "string",
        "tips": "string",
        "img": "string",
        "jumlah_kalori": "integer",
        "level": "string",
        "kategori": "string"
    }
  }
```

## GET ALL makanan = role admin && user

Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/makanan
- Header :
    - Content-Type: application/json
    - Accept: application/json
    
- Response : 
    
```json
  {
     "meta": {
              "integer"
    },
      "data": {
        "uuid": "string",
        "judul": "string",
        "deskripsi_singkat": "string",
        "deskripsi_lengkap": "string",
        "img": "string",
        "tips": "string",
        "jumlah_kalori": "integer",
        "level": "string",
        "kategori": "string"
    }
  }
```

## GET id makanan role = admin && user

Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/makanan/{makanan_id}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    
- Response : 
    
```json
  {
      "data": {
        "uuid": "string",
        "judul": "string",
        "deskripsi_singkat": "string",
        "deskripsi_lengkap": "string",
        "img": "string",
        "tips": "string",
        "jumlah_kalori": "integer",
        "level": "string",
        "kategori": "string"
    }
  }
```



## Update makanan = role admin

Request :

- Method : PUT
- Endpoint : https://backend-production-2c47.up.railway.app/makanan/{makanan_id}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Body : 
    - form-data
    ```json
        { 
            "judul": "string",
            "deskripsi_singkat": "string",
            "deskripsi_lengkap": "string",
            "img": "file",
            "tips": "string",
            "jumlah_kalori": "integer",
            "level": "string",
            "kategori": "string"
        }
    ```
    
- Response : 
    
```json
  {
    "status": "Success",
    "message": "Update Foods Success"
  }
```

## Delete makanan = role admin

Request :

- Method : DELETE
- Endpoint : https://backend-production-2c47.up.railway.app/makanan/{makanan_id}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Response : 
    
```json
  {
    "message": "FOOD HAS BEEN DELETED",
    "img": {
        "result": "ok"
    }
  }
```

## Get All Comment Olahraga = role Admin && User
Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
Response : 
    
```json
  {
     "meta": {
              "integer"
    },
      "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
```

## Get Id Comment Olahraga = role Admin
Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment/{uuid_comment}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
Response : 
```json
  {
      "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
```

## Create Comment Olahraga = User && Admin
- Method : POST
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Request Body : 
    - form-data
    ```json
        { 
            "bintang": "string",
            "comment_review": "string"
        }
    ```
    
- Response Body : 
    
```json
  {
    "status": "Success",
    "message": "Create Comment",
    "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
  ```

## Update Comment Olahraga = User && Admin
- Method : PUT
- Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment/{uuid_comment}
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Request Body : 
    - form-data
    ```json
        { 
            "bintang": "string",
            "comment_review": "string"
        }
    ```
    
- Response Body : 
    
```json
  {
    "status": "Success",
    "message": "Comment Updated",
    "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
  ```

  ## Delete Comment Olahraga By Id = role User && Admin
  Request : 
  - Method : DELETE
  - Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment/{uuid_comment}
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
  
  Response : 

```json
  {
    "message": "Comment Has Been Deleted",
    "result" : "ok"
  }
```

## Delete All Comment Olahraga = Admin
  Request : 
  - Method : DELETE
  - Endpoint : https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}/comment
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
  
  Response : 

```json
  {
    "message": "succesfuly delete all",
    "result" : "ok"
  }
```

## Get All Comment Makanan = role Admin && User
Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
Response : 
    
```json
  {
     "meta": {
              "integer"
    },
      "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
```

## Get Id Comment Makanan = role Admin
Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment/{uuid_comment}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
Response : 
```json
  {
      "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
```

## Create Comment Makanan = User && Admin
- Method : POST
- Endpoint : https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Request Body : 
    - form-data
    ```json
        { 
            "bintang": "string",
            "comment_review": "string"
        }
    ```
    
- Response Body : 
    
```json
  {
    "status": "Success",
    "message": "Create Comment",
    "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
  ```

## Update Comment Makanan = User && Admin
- Method : PUT
- Endpoint : https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment/{uuid_comment}
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Request Body : 
    - form-data
    ```json
        { 
            "bintang": "string",
            "comment_review": "string"
        }
    ```
    
- Response Body : 
    
```json
  {
    "status": "Success",
    "message": "Comment Updated",
    "data": {
        "bintang": "string",
        "comment_review": "string"
    }
  }
  ```

  ## Delete Comment Makanan By Id = role User && Admin
  Request : 
  - Method : DELETE
  - Endpoint : https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment/{uuid_comment}
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
  
  Response : 

```json
  {
    "message": "Comment Has Been Deleted",
    "result" : "ok"
  }
```

## Delete All Comment Makanan = Admin
  Request : 
  - Method : DELETE
  - Endpoint : https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}/comment
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
  
  Response : 

```json
  {
    "message": "succesfuly delete all",
    "result" : "ok"
  }
```
## Get All Jadwal Diet = role Admin && User
Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/jadwaldiet
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
Response : 
    
```json
  {
    "data": [
        {
            "uuid": "{uuid_jadwal}",
            "uuid_user": "{uuid_user}",
            "uuid_olahraga": "{uuid_olahraga}",
            "uuid_makanan": "{uuid_makanan}",
            "level": "STRING",
            "tgl_mulai": "DATE",
            "tgl_selesai": "DATE",
            "users": {
                "uuid": "{uuid_user}",
                "name": "STRING",
                "email": "STRING",
                "password": "STRING",
                "role": "USER/ADMIN",
                "gender": "STRING",
                "umur": "STRING",
                "geografis": "STRING",
                "profesi": "STRING",
                "alamat": "STRING",
                "img_profile": "FILE"
            },
            "olahraga": [
                {
                    "uuid": "{uuid_olahraga}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ],
            "makanan": [
                {
                    "uuid": "{uuid_makanan}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ]
        },
        {
            "uuid": "{uuid_jadwal}",
            "uuid_user": "{uuid_user}",
            "uuid_olahraga": "{uuid_olahraga}",
            "uuid_makanan": "{uuid_makanan}",
            "level": "STRING",
            "tgl_mulai": "DATE",
            "tgl_selesai": "DATE",
            "users": {
                "uuid": "{uuid_user}",
                "name": "STRING",
                "email": "STRING",
                "password": "STRING",
                "role": "USER/ADMIN",
                "gender": "STRING",
                "umur": "STRING",
                "geografis": "STRING",
                "profesi": "STRING",
                "alamat": "STRING",
                "img_profile": "FILE"
            },
            "olahraga": [
                {
                    "uuid": "{uuid_olahraga}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ],
            "makanan": [
                {
                    "uuid": "{uuid_makanan}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ]
        }
    ]
}
```
## Get Id Jadwal Diet 
Request :

- Method : GET
- Endpoint : https://backend-production-2c47.up.railway.app/jadwaldiet/{uuid_jadwal}
- Header :
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
    
Response : 
```json
  {
    "data": [
        {
            "uuid": "{uuid_jadwal}",
            "uuid_user": "{uuid_user}",
            "uuid_olahraga": "{uuid_olahraga}",
            "uuid_makanan": "{uuid_makanan}",
            "level": "STRING",
            "tgl_mulai": "DATE",
            "tgl_selesai": "DATE",
            "users": {
                "uuid": "{uuid_user}",
                "name": "STRING",
                "email": "STRING",
                "password": "STRING",
                "role": "USER/ADMIN",
                "gender": "STRING",
                "umur": "STRING",
                "geografis": "STRING",
                "profesi": "STRING",
                "alamat": "STRING",
                "img_profile": "FILE"
            },
            "olahraga": [
                {
                    "uuid": "{uuid_olahraga}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ],
            "makanan": [
                {
                    "uuid": "{uuid_makanan}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ]
        }
    ]
}
```
## Create Jadwal Diet 
- Method : POST
- Endpoint : https://backend-production-2c47.up.railway.app/jadwaldiet
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Request Body : 
    - form-data
    ```json
        { 
            "uuid": "{uuid_jadwal}",
            "uuid_user": "{uuid_user}",
            "uuid_olahraga": "{uuid_olahraga}",
            "uuid_makanan": "{uuid_makanan}",
            "level": "STRING",
            "tgl_mulai": "DATE",
            "tgl_selesai": "DATE"
        }
    ```
    
- Response Body : 
    
```json
  {
    "status": "SUCCESS",
    "message": "Schedule Has Been Created",
    "data": {
            "uuid": "{uuid_jadwal}",
            "uuid_user": "{uuid_user}",
            "uuid_olahraga": "{uuid_olahraga}",
            "uuid_makanan": "{uuid_makanan}",
            "level": "STRING",
            "tgl_mulai": "DATE",
            "tgl_selesai": "DATE",
            "users": {
                "uuid": "{uuid_user}",
                "name": "STRING",
                "email": "STRING",
                "password": "STRING",
                "role": "USER/ADMIN",
                "gender": "STRING",
                "umur": "STRING",
                "geografis": "STRING",
                "profesi": "STRING",
                "alamat": "STRING",
                "img_profile": "FILE"
            },
            "olahraga": [
                {
                    "uuid": "{uuid_olahraga}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ],
            "makanan": [
                {
                    "uuid": "{uuid_makanan}",
                    "judul": "STRING",
                    "deskripsi_singkat": "STRING",
                    "deskripsi_lengkap": "STRING",
                    "img": "LINK CLOUDINARY",
                    "tips": "STRING",
                    "jumlah_kalori": "STRING",
                    "level": "STRING",
                    "kategori": "STRING"
                }
            ]
        }
  }
  ```
## Update Jadwal Diet
- Method : PUT
- Endpoint : https://backend-production-2c47.up.railway.app/jadwaldiet
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
- Request Body : 
    - form-data
    ```json
        { 
            "uuid": "{uuid_jadwal}",
            "uuid_user": "{uuid_user}",
            "uuid_olahraga": "{uuid_olahraga}",
            "uuid_makanan": "{uuid_makanan}",
            "level": "STRING",
            "tgl_mulai": "DATE",
            "tgl_selesai": "DATE"
        }
    ```
- Response Body : 
```json
  {
    "status": "SUCCESS",
    "message": "Update Success"
}
```
 ## Delete Jadwal Diet By Id 
  Request : 
  - Method : DELETE
  - Endpoint : https://backend-production-2c47.up.railway.app/jadwaldiet/{uuid_jadwal}
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
  Response : 

```json
  {
    "message": "Schedule Deleted"
  }
```

## Delete All Jadwal Diet = role Admin
Request : 
  - Method : DELETE
  - Endpoint : https://backend-production-2c47.up.railway.app/jadwaldiet/{uuid_jadwal}
    - Content-Type: application/json
    - Accept: application/json
    - Authorization : Bearer token
Response : 

```json
  true
```






# Not Authrozation

## Get All Kontak = role Admin 
**Request** : 
- **Method** : GET
- **URL** : https://backend-production-2c47.up.railway.app/kontak
**Response** : 
```json
  {
    "status": "SUCCESS",
    "message": "Get All Message",
    "meta": {
        "total": 2
    },
    "data": [
        {
            "uuid": "{uuid_pesan}",
            "name": "STRING",
            "email": "STRING",
            "pesan": "STRING"
        },
        {
            "uuid": "{uuid_pesan}",
            "name": "STRING",
            "email": "STRING",
            "pesan": "STRING"
        }
    ]
}
```
## Get Kontak By Id = role Admin 
**Request** : 
- **Method** : GET
- **URL** : https://backend-production-2c47.up.railway.app/kontak/{uuid_pesan}
**Response** : 
```json
 {
    "status": "SUCCESS",
    "message": "Get Message Detail",
    "data": {
        "uuid": "uuid_pesan",
        "name": "STRING",
        "email": "STRING",
        "pesan": "STRING"
    }
}
```


## Create Kontak = role User
- **Method** : POST
- **URL** : https://backend-production-2c47.up.railway.app/kontak
- **Request - Body** : 
```json
  {
    "name": "STRING",
    "email": "STRING",
    "pesan":"STRING"
}
```
- **Response - Body** : 
```json
  {
    "status": "SUCCESS",
    "message": "Message Has Been Created",
    "data": {
        "uuid": "{uuid_pesan}",
        "name": "STRING",
        "email": "STRING",
        "pesan": "STRING"
    }
}
```
## Update Kontak =  role User && Admin 
- **Method** : PUT
- **URL** : https://backend-production-2c47.up.railway.app/kontak/{uuid_pesan}
- **Request - Body** : 
```json
  {
    "name": "STRING",
    "email": "STRING",
    "pesan":"STRING"
}
```
- **Response - Body** : 
```json
  {
    "status": "SUCCESS",
    "message": "Update Success"
}
```

## Delete Kontak By Id = role User && Admin
- **Method** : DELETE
- **URL** : https://backend-production-2c47.up.railway.app/kontak/{uuid_pesan}
- **Response - Body** : 
```json
  {
    "message": "Message Has Been Deleted"
}
```
## Delete All Kontak = role Admin
- **Method** : DELETE
- **URL** : https://backend-production-2c47.up.railway.app/kontak
- **Response - Body** : 
```json
  {
    "message": "Message Has Been Deleted"
}
```
