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
3. createolahraga = method put = https://backend-production-2c47.up.railway.app/olahraga
4. updateolahraga = method delete = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}
5. deleteolahraga = method delete = https://backend-production-2c47.up.railway.app/olahraga/{uuid_olahraga}
5. deleteallkategori = method delete = https://backend-production-2c47.up.railway.app/olahraga

### makanan
1. getallmakanan = method get = https://backend-production-2c47.up.railway.app/makanan
2. getidmakanan = method get = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}
3. createmakanan = method put = https://backend-production-2c47.up.railway.app/makanan
4. updatemakanan = method delete = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}
5. deletemakanan = method delete = https://backend-production-2c47.up.railway.app/makanan/{uuid_makanan}
5. deleteallmakanan = method delete = https://backend-production-2c47.up.railway.app/makanan

<!-- tambahin lagi bang ali seperti comment, jadwaldiet, kontak  -->
## AUTHORIZATION
Request :
- Header :
    - "Authorization" : "Bearer <token>"


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
    "username": "string",
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
    - Authorization : Bearer <token>
    
- gambar masukkan token 
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/62e8fc93-ca7d-474e-a95b-e3c3135e61da)

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
    - Authorization : Bearer <token>
    
- gambar masukkan token 
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/62e8fc93-ca7d-474e-a95b-e3c3135e61da)

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
    - Authorization : Bearer <token>
    
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
    - Authorization : Bearer <token>
     
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
    - Authorization : Bearer <token>
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
    - Authorization : Bearer <token>
    
- gambar masukkan token 
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/62e8fc93-ca7d-474e-a95b-e3c3135e61da)

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
    - Authorization : Bearer <token>
    
- gambar masukkan token 
![image](https://github.com/mr-exploit/tugas-TPA-5/assets/65493711/62e8fc93-ca7d-474e-a95b-e3c3135e61da)

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
    - Authorization : Bearer <token>
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
    - Authorization : Bearer <token>
- Response : 
    
```json
  {
    "message": "Sport Has Been Delete",
    "img": {
        "result": "ok"
    }
  }
```

# Not Authrozation    
