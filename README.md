# E-commerce
Best E-Commerce in Town!


## Routing

Complete Routing of this App

##  User Routes

Includes SignIn, Google SignIn, and Regisitration

## POST /user/signin

To Sign In without using google authorization

    url: 'http://localhost:3000/user/signin'
    headers: token *required*,
    body: {
        email:{
            type: string
            required: true
        } ,
        password:{
            type: string
            required: true
        }
    },
    response status: {
        success: {
            message: 'Login Success'
            status: 200
        },
        error: {
            message:'Not Found',
            status: 404
        }
    }



## POST /user/Gsignin

To Sign In using google authorization

    url: 'http://localhost:3000/user/Gsignin'
    headers: token *required*,
    body: {
        email:{
            type: string
            required: true
        } ,
        password:{
            type: string
            required: true
        }
    },
    response status: {
        success: {
            message: 'Login Success'
            status: 200
        },
        error: {
            message:'Not Found',
            status: 404
        }
    }


## POST /user/register

To Register Account in E-Commerce

    url: 'http://localhost:3000/user/register'
    headers: none,
    body: {
        name:{
            type: string
            required: true
        } ,
        email:{
            type: string
            required: true
        },
        password:{
            type:string,
            required:true
        }
    },
    response status: {
        success: {
            message: 'Account is successfully created'
            status: 201
        },
        error: {
            message: 'internal server error'
            status: 500
        }
    }

## Product Routes

Includes, CRUD of products, Getting current user profile, filtering products List

## POST /products/create

User creating products 

    url: 'http://localhost:3000/products/create'
    headers: token *required*,
    body: {
        name:{
            type: string
            required: true
        } ,
        price:{
            type: string
            required: true
        },
        createdAt:{
            type:Date,
            required:true
        },
        featured_image:{
            type:String,
            required:true
        },
        stock:{
            type:String,
            required:true
        },
    },
    response status: {
        success: {
            data : {
                name,
                price,
                featured_image,
                stock,
            },
            message: 'product is successfully created'
            status: 201
        },
        error: {
            message: 'internal server error'
            status: 500
        }
    }


## PATCH /products/update/:id

User can update their products

    url: 'http://localhost:3000/products/update/:id'
    headers: token *required*,
    body: {
        name:{
            type: String
        } ,
        price:{
            type: String
        },
        featured_image:{
            type: String,
        },
        stock:{
            type: String
        }
    }, 
    response status: {
        success: {
            data : {
                updatedData
            },
            message: 'Product is successfully updated'
            status: 201
        },
        error: {
            message: 'Product not found'
            status: 404
        }
    }

## DELETE /products/delete/:id

Deleting User's products

    url: 'http://localhost:3000/products/delete/:id'
    headers: token *required*
    body: none,
    response status: {
        success: {
            data : {
                name,
                price,
                featured_image,
                stock,
                createdAt,
                seller
            },
            message: 'Product is successfully deleted'
            status: 200
        },
        error: {
            message: 'Product not found'
            status: 404
        }
    }

## GET /products/

Get All Products

    url: 'http://localhost:3000/products',
    headers: token *required*,
    body: none,
    response status: {
        success: {
            name : {
                type: string
            },
            data:{
                name,
                price,
                featured_image,
                stock,
                createdAt,
                seller
            },
            message: 'products are found'
            status: 200
        },  error: {
            message: 'Wrong token'
            status: 404
            }
    }
## GET /products/filter/:id

 Get Product by their Id

    url: 'http://localhost:3000/products/filter/:id'
    headers: token *required*,
    body: 
    id: {
        type: String
        },
    response status: {
        success: {
            data : {
                name,
                price,
                featured_image,
                stock,
                createdAt,
                seller
            },
            message: 'Found your Product'
            status: 200
        },
        error: {
            message: 'Not Found'
            status: 404
        }
    }


## GET /products/myproducts


 Get Current User's products

    url: 'http://localhost:3000/products/myproducts'
    headers: token *required*,
    body: none,
    response status: {
        success: {
            data : {
                data (array of products)
            },
            message: 'Found your products'
            status: 200
        },
        error: {
            message: 'Not Found'
            status: 404
        }
    }

## Cart Routing



#