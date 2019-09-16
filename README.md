# E-commerce
Best E-Commerce in Town!

## Deploy Link

http://mamszcollective.jackbloo.com

## Installation

Server 

    npm install

For running

    npm run dev

Client

    npm install

For running

    npm run serve

Testing 

For running

    npm run start

## Routing

Complete Routing of this App

##  User Routes

Includes SignIn, Google SignIn, and Regisitration

## POST /user/signin

* **URL** 

    http://34.87.37.210/user/signin
* **METHOD** 

    POST
* **URL Params**

    **none**
* **Data Params** 

        email:{
            type: string
            required: true
        } ,
        password:{
            type: string
            required: true
        }

* **Success Response** 

        {
            message: 'Login Success'
            status: 200
        }

* **Error Response** 

        {
            httpStatus: 400,
            message: 'Wrong Email/Password'
        }
        or
        {
            httpStatus: 404,
            message: 'Email Not Found'    
        }

## POST /user/register

To Register Account in E-Commerce

* **URL**

    http://35.225.201.56/user/register
* **METHOD** 

    POST

* **URL Params**

    **none**
* **Data Params** 

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
* **Success Response** 

            {
                message: 'Account is successfully created',
                status: 201
            }

* **Error Response** 

            {
                message: 'Internal Sever Error'
                status: 500
            }

## Product Routes

Includes, CRUD of products, Getting current user profile

## POST /products/create

User creating products 

* **URL** 

    http://35.225.201.56/products/create

* **METHOD** 

    POST

* **Headers**

    tokenAdmin:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE

* **URL Params**

    **none**
* **Data Params** 

        {
            name:{
                type: string
                required: true
            } ,
            price:{
                type: string
                required: true
            },
            image:{
                type:String,
                required:true
            },
            stock:{
                type:String,
                required:true
            }
        }

* **Success Response** 


        {
            data: {
                name:{
                    type: string
                    required: true
                } ,
                price:{
                    type: string
                    required: true
                },
                image:{
                    type:String,
                    required:true
                },
                stock:{
                    type:String,
                    required:true
                }
            },
            status: 201
        }

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }



## PATCH /products/:id

User can update their products

* **URL**

    http://35.225.201.56/products/:id
* **METHOD** 

    PATCH

* **Headers**

    tokenAdmin:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
* **URL Params**

    id=[string]

* **Data Params** 

        {
            name:{
                type: String
            } ,
            price:{
                type: String
            },
            image:{
                type: String,
            },
            stock:{
                type: String
            }
        }

* **Success Response** 


        {
            data: {
                name:{
                    type: string
                    required: true
                } ,
                price:{
                    type: string
                    required: true
                },
                image:{
                    type:String,
                    required:true
                },
                stock:{
                    type:String,
                    required:true
                }
            },
            status: 200
        }

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## DELETE /products/:id

Deleting User's products

* **URL** 

    http://35.225.201.56/products/:id

* **METHOD** 

    DELETE

* **Headers**

    tokenAdmin:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
* **URL Params**

    id=[string]

* **Data Params** 

    **none**

* **Success Response** 


        {
            data: {
                name:{
                    type: string
                    required: true
                } ,
                price:{
                    type: string
                    required: true
                },
                image:{
                    type:String,
                    required:true
                },
                stock:{
                    type:String,
                    required:true
                }
            },
            status: 200
        }

* **Error Response** 


        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Product Not Found'    
        }



## GET /products/

Get All Products

* **URL** 

    http://35.225.201.56/products
* **METHOD** 

    GET

* **Headers**

    tokenAdmin:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
* **URL Params**

    **none**

* **Data Params** 

    **none**

* **Success Response** 

        {[
            data: {
                name:{
                    type: string
                    required: true
                } ,
                price:{
                    type: string
                    required: true
                },
                image:{
                    type:String,
                    required:true
                },
                stock:{
                    type:String,
                    required:true
                }
            },
            status: 200
        ]}

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }

## GET /products/:id

 Get One Product

* **URL** 

    http://35.225.201.56/products/:id

* **METHOD** 

    GET

* **Headers**

    tokenAdmin:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
* **URL Params**

    id=[string]

* **Data Params** 

    **none**

* **Success Response** 

        {
        data: {
            name:{
                type: string
                required: true
            } ,
            price:{
                type: string
                required: true
            },
            image:{
                type:String,
                required:true
            },
            stock:{
                type:String,
                required:true
            }
        },
        status: 200
    }

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Product Not Found'    
        }

## Cart Routing

Include CRUD of cart

## POST /carts/:id

User creating Carts

* **URL**

    htttp://35.225.201.56/carts/:id

* **METHOD**

    POST

* **Headers**

    access_token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

        {
            productName: {
                type: String,
                required: true
            },
            productPrice: {
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                default: 0
            },
            productStock: {
                type: Number,
                required: true
            },
            checkout_status: {
                type: Boolean,
                default:false
            },
            productId: {type: Schema.Types.ObjectId, ref: 'products'},
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
        }

* **Success Response** 


        data: {
                    productName: {
                        type: String,
                        required: true
                    },
                    productPrice: {
                        type: String,
                        required: true
                    },
                    quantity:{
                        type: Number,
                        default: 0
                    },
                    productStock: {
                        type: Number,
                        required: true
                    },
                    checkout_status: {
                        type: Boolean,
                        default:false
                    },
                    productId: {type: Schema.Types.ObjectId, ref: 'products'},
                    UserId: {type: Schema.Types.ObjectId, ref: 'users' },
                    transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
                },
            status: 201

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Product Not Found'    
        }



## PATCH /carts/:id

User can update their carts

* **URL** 

    http://35.225.201.56/carts/:id

* **METHOD**

    PATCH

* **Headers**

    access_token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]
    
* **Data Params**

        {
                productName: {
                    type: String,
                    required: true
                },
                productPrice: {
                    type: String,
                    required: true
                },
                quantity:{
                    type: Number,
                    default: 0
                },
                productStock: {
                    type: Number,
                    required: true
                },
                checkout_status: {
                    type: Boolean,
                    default:false
                },
                productId: {type: Schema.Types.ObjectId, ref: 'products'},
                UserId: {type: Schema.Types.ObjectId, ref: 'users' },
                transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
            }


* **Success Response** 

        data: {
                productName: {
                    type: String,
                    required: true
                },
                productPrice: {
                    type: String,
                    required: true
                },
                quantity:{
                    type: Number,
                    default: 0
                },
                productStock: {
                    type: Number,
                    required: true
                },
                checkout_status: {
                    type: Boolean,
                    default:false
                },
                productId: {type: Schema.Types.ObjectId, ref: 'products'},
                UserId: {type: Schema.Types.ObjectId, ref: 'users' },
                transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
            },
            status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Cart Not Found'    
        }


## DELETE /carts/:id

Deleting User's carts

* **URL** 

     http://35.225.201.56/carts/:id

* **METHOD**

    DELETE

* **Headers**

    access_token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

    **none**

* **Success Response** 

        data: {
            productName: {
                type: String,
                required: true
            },
            productPrice: {
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                default: 0
            },
            productStock: {
                type: Number,
                required: true
            },
            checkout_status: {
                type: Boolean,
                default:false
            },
            productId: {type: Schema.Types.ObjectId, ref: 'products'},
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
        },
        status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Cart Not Found'    
        }


## GET /carts/

Get All carts


* **URL** 

    http://35.225.201.56/carts

* **METHOD**

    GET

* **Headers**

    access_token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params**

    **none**

* **Success Response** 

        data: [{
            productName: {
                type: String,
                required: true
            },
            productPrice: {
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                default: 0
            },
            productStock: {
                type: Number,
                required: true
            },
            checkout_status: {
                type: Boolean,
                default:false
            },
            productId: {type: Schema.Types.ObjectId, ref: 'products'},
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
        }],
        status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Cart Not Found'    
        }

## GET /carts/:id

 Get One cart

 * **URL** 

    http://35.225.201.56/carts/:id

* **METHOD**

    GET

* **Headers**

    access_token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params**

    **none**

* **Success Response** 

        data: [{
            productName: {
                type: String,
                required: true
            },
            productPrice: {
                type: String,
                required: true
            },
            quantity:{
                type: Number,
                default: 0
            },
            productStock: {
                type: Number,
                required: true
            },
            checkout_status: {
                type: Boolean,
                default:false
            },
            productId: {type: Schema.Types.ObjectId, ref: 'products'},
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            transactionId: {type: Schema.Types.ObjectId, ref: 'transactions'}
        }],
        status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Cart Not Found'    
        }

## Admin Routing

Include Login of Admin

## POST /admin/login

Admin login


* **URL** 

    http://35.225.201.56/admin/login

* **METHOD**

    POST

* **Headers**

    **none**

* **URL Params**

    **none**

* **Data Params** 

        {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }

* **Success Response** 

        tokenAdmin: 
                {
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
                }


* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Admin Not Found'    
        }


## Transactions Routing

Include CRUD of Transactions

## POST /transaction/create

Creating transaction

* **URL** 
* **METHOD**

* **Headers**

    access_ token:

            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params**

        {
            total_price:{
                type: Number,
                required: true
            },
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            send_status: {
                type: Boolean,
                default: false
            },
            arrived_status: {
                type: Boolean,
                default:false
            }
        }

* **Success Response** 

        data: {
            total_price:{
                type: Number,
                required: true
            },
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            send_status: {
                type: Boolean,
                default: false
            },
            arrived_status: {
                type: Boolean,
                default:false
            }
        },
        status: 201

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## PATCH /transaction/:id

Updating transaction

* **URL** 

    http://35.225.201.56/transaction/:id

* **METHOD**

    PATCH

* **Headers**

    access_token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

        {
            total_price:{
                type: Number,
                required: true
            },
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            send_status: {
                type: Boolean,
                default: false
            },
            arrived_status: {
                type: Boolean,
                default:false
            }
        }


* **Success Response**

        data: {
            total_price:{
                type: Number,
                required: true
            },
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            send_status: {
                type: Boolean,
                default: false
            },
            arrived_status: {
                type: Boolean,
                default:false
            }
        },
        status: 200

* **Error Response** 


        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }
        or
        {
            httpStatus: 404,
            message: 'Transaction Not Found'    
        }

## GET /transaction/

Get All transactions

* **URL** 

    http://35.225.201.56/transaction

* **METHOD**


    GET

* **Headers**

    access_token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    **none**

* **Data Params** 

    **none**

* **Success Response** 

        name: {
            type: string
        },
        data: [{
            total_price:{
                type: Number,
                required: true
            },
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            send_status: {
                type: Boolean,
                default: false
            },
            arrived_status: {
                type: Boolean,
                default:false
            }
        }],
        status: 200

* **Error Response** 

        {
            httpStatus: 500,
            message: 'Internal Server Error'    
        }


## GET /transaction/:id

 Get One transaction

* **URL**

    http://35.225.201.56/transaction/:id

* **METHOD**

    GET

* **Headers**

    token:

        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2UyZmQ4Mjk3ZmRhMGY3ODZjYmI2YSIsIm5hbWUiOiJzZW5pb3JpdGEiLCJlbWFpbCI6InNlbmlvcml0YUBnbWFpbC5jb20iLCJpYXQiOjE1Njg2MTQ5MDUsImV4cCI6MTU2ODYxODUwNX0.tLObHGmGbouyoPErXgxLXb3IZ13zBkX_Sr8FT5y7BgE
        
 
* **URL Params**

    id=[string]

* **Data Params** 

    **none**

* **Success Response** 

        data: {
            total_price:{
                type: Number,
                required: true
            },
            UserId: {type: Schema.Types.ObjectId, ref: 'users' },
            send_status: {
                type: Boolean,
                default: false
            },
            arrived_status: {
                type: Boolean,
                default:false
            }
        },
        status: 200    

* **Error Response** 



    


# ERROR

## Error Handling

Form of Error Handling


      status: httpStatus || 406,
      message,


## 400
Error caused by the Users ('Bad request')

      status: 400,
      message: 'Email is already Registered',



## 401
Error due to the unauthorization


      status: 401,
      message: 'Not Authorized',



## 403
Error caused by Token

      status: 403,
      message: 'Token Undefined',



## 404
Error caused by Token

      status: 404,
      message: 'Not Found',


## 500
Error cause by Internal Server Error

      status: 500,
      message: 'Internal Server Error',
