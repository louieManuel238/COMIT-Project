/**
 * This js file will be modified for accessing data in an API
 */

export const items = [
    {
        id: 1,
        name: "NDR1",
        category: ["shoes","women"],
        sizes: [],
        colors: [],
        description: "Addidas NDR original stlye",
        price: 199,
        images: ["./product/img/shoes/1-1.jpg",
        "./product/img/shoes/1-2.jpg",
        "./product/img/shoes/1-3.jpg"]
    },
    {
        id: 2,
        name: "Prime Blue",
        category: ["shoes","men"],
        sizes: [],
        colors: [],
        description: "Addidas primbe blue original stlye",
        price: 199,
        images: ["./product/img/shoes/2-1.jpg",
        "./product/img/shoes/2-2.jpg",
        "./product/img/shoes/2-3.jpg"]
    },
    {
      id: 3,
      name: "Basic Colored T-Shirt",
      category: ["tshirt","men","women"],
      sizes: ["xs","s","m","l"],
      colors: ["blue","green","grey","cobalt","purple","red"],
      description: "Soft, stretchy, and naturally breathable, it’s your favourite tee",
      price: 54.00,
      images:[{url: "/images/products/tshirt/blue-t-shirt.jpg", color: "blue"}, 
              {url:"/images/products/tshirt/cobalt-blue-t-shirt.jpg", color: "cobalt"},
              {url:"/images/products/tshirt/green-t-shirt.jpg", color: "green"},
              {url:"/images/products/tshirt/grey-t-shirt.jpg", color: "grey"},
              {url:"/images/products/tshirt/purple-t-shirt.jpg", color: "purple"},
              {url:"/images/products/tshirt/red-t-shirt.jpg", color: "red"}]
    },
    {
      id: 4,
      name: "Striped T-Shirt",
      category: ["tshirt", "women"],
      sizes: ["xs", "s", "m"],
      colors: ["white"],
      description: "short sleeve cotton jersey t-shirt striped in navy and white. Crewneck collar. ",
      price: 160.00,
      images: [{url:""}]
    },
    {
      id: 5,
      name: "Striped Sleeveless T-Shirt",
      category: ["tshirt", "women"],
      sizes: ["xs", "s", "m"],
      colors: ["white"],
      description: "sleeveless cotton t-shirt striped in navy and white. Crewneck collar. ",
      price: 180.00,
      images: [{url:""}]
    }
    ]
export const categories = 
  {
    "women":["shoes","jeans","joggers","leggings","tshirt","dress","shorts"],
    "men":["shoes","jeans","tshirt","jackets", "shorts"],
    "kids":["shoes","pants"]
  }
    
export const cart = [
  {
    id: 3,
    size: "s",
    color: "blue",
    url: "../../images/products/tshirt/blue-t-shirt.jpg"
  }
]