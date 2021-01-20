 const PRODUCTS = [
    {
        id:1,
        name:'Rasteira Tira Dedo',
        color:'black',
        price:59.90,
        quantity:1
        
    },
    {
        id:2,
        name:'Bolsa Tressê Rolotê',
        color:'white',
        price:39.90,
        quantity:1
    },
    {
        id:3,
        name:'Bolsa Tressê Rolotê',
        color:'white',
        price:39.90,
        quantity:1
    },
    {
        id:4,
        name:'Bolsa Tressê Rolotê',
        color:'white',
        price:39.90,
        quantity:1
    },
    {
        id:5,
        name:'Bolsa Tressê Rolotê',
        color:'white',
        price:39.90,
        quantity:1
    },
    {
        id:6,
        name:'Bolsa Tressê Rolotê',
        color:'white',
        price:39.90,
        quantity:1
    },
    {
        id:7,
        name:'Bolsa Tressê Rolotê',
        color:'white',
        price:39.90,
        quantity:1
    },
    {
        id:8,
        name:'Bolsa Tressê Rolotê',
        color:'white',
        price:39.90,
        quantity:1
    }             
 ]

  const resource = '/products'
 
 export const getProducts = url => new Promise((resolve,reject)=>{
     if(url !== resource)
       reject(new Error(`request error: This resource "${url}" does not exist, try again!`))
        
    resolve(PRODUCTS)
 })
  
 