// PROJETO DE TESTE AUTOMATIZADO  API DA https://fakestoreapi.com/docs 


//Retrieve a list of all available products.
/// <reference types="cypress"/>
     describe('LISTA DE API AUTOMATIZADAS', () =>{
    
            it('API Get all products ', () =>{
                cy.request({
                method: 'GET',
                url: 'https://fakestoreapi.com/products',
            
              
                 }).then(response =>{
                 cy.log(JSON.stringify(response.body))
                 expect(response.status).to.eq(200) // verifica se o status e 200
                       
        })
    })
    
    //Create a new product.
    it('API Add a new product ', () =>{
        cy.request({
    method: 'POST',
    url: 'https://fakestoreapi.com/products',
    
          body: {
        
            "id": 0,
            "title": "string",
            "price": 0.1,
            "description": "string",
            "category": "string",
            "image": "http://example.com"
       
          
        }
    
    }).then(response =>{
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200) // verifica se o status e 200
       
    })
    })
    //Retrieve details of a specific product by ID.
    it('API Get a single product ', () =>{
        cy.request({
    method: "GET",
    url: 'https://fakestoreapi.com/products/1',


    }).then(response =>{
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200) // verifica se o status e 200
               
     })
     })

    //update an existing product by ID.
    it('API Update a product - Price ', () =>{
        cy.request({
    method: "PUT",
    url: 'https://fakestoreapi.com/products/21',
    
    body: {
        
        "id": 21,
        "title": "string",
        "price": 0.2,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
      
         
       }
     
      
    }).then(response =>{
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200) // verifica se o status e 200
               
 })
 })

  //Delete a specific product by ID.
 it('API Delete a product ', () =>{
    cy.request({
 method: "DELETE",
 url: 'https://fakestoreapi.com/products/1',


  
}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
})
})

/// TESTE DA API CART

//Retrieve a list of all available carts
it('API Get all carts ', () =>{
    cy.request({
method: 'GET',
url: 'https://fakestoreapi.com/carts',

  
}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
})
})

//Create a new cart.
it('APi Add a new cart ', () =>{
    cy.request({
method: "POST",
url: 'https://fakestoreapi.com/carts',

body: 

{
    "id": 0,
    "userId": 0,
    "products": [
    {}
    ]
    }
 
  
}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
})
})
//Retrieve details of a specific cart by ID.
it('API Get a single cart ', () =>{
    cy.request({
method: "GET",
url: 'https://fakestoreapi.com/carts/1',


}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
 })
 })

//Update an existing cart by ID.
it('API Update a cart', () =>{
    cy.request({
method: "PUT",
url: 'https://fakestoreapi.com/carts/0',

body: 

 {
    "id": 0,
    "userId": 0,
    "products": [
    {}
    ]
    }

}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
 })
 })
 //Delete a specific cart by ID.
 it('API Delete a cart', () =>{
    cy.request({
 method: "DELETE",
 url: 'https://fakestoreapi.com/carts/1',

 }).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
 })
 })

//API USERS


//Retrieve a list of all users.
it('API Get all users ', () =>{
    cy.request({
method: 'GET',
url: 'https://fakestoreapi.com/users',

  
}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
})
})

//Create a new user.
it('API Add a new user ', () =>{
    cy.request({
method: "POST",
url: 'https://fakestoreapi.com/users',

body: 

{
    "id": 0,
    "username": "string",
    "email": "string",
    "password": "string"
    }
 
  
}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
})
})

//Retrieve details of a specific user by ID.
it('API Get a single user ', () =>{
    cy.request({
method: "GET",
url: 'https://fakestoreapi.com/users/1',


}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
 })
 })

//Update an existing user by ID.
it('API Update a user', () =>{
    cy.request({
method: "PUT",
url: 'https://fakestoreapi.com/users/1',

body: 
{
    "id": 0,
    "username": "string",
    "email": "string",
    "password": "string"
    }

}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
 })
 })
 //Delete a specific user by ID.
 it('API Delete a user', () =>{
    cy.request({
 method: "DELETE",
 url: 'https://fakestoreapi.com/users/1',

 }).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
 })
 })

//Update an existing user by ID.
it('API Update a user', () =>{
    cy.request({
method: "PUT",
url: 'https://fakestoreapi.com/users/1',

body: 
{
    "id": 0,
    "username": "string",
    "email": "string",
    "password": "string"
    }

}).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
           
 })
 })

 //Authenticate a user.
it('API Login', () =>{
    cy.request({
 method: "POST",
 url: 'https://fakestoreapi.com/auth/login',

 body: 

 {
    "username": "mor_2314",
    "password": "83r5^_"
    }

 }).then(response =>{
    cy.log(JSON.stringify(response.body))
    expect(response.status).to.eq(200) // verifica se o status e 200
    
    
    
 })
 })

})
