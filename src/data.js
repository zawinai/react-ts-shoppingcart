export const Data = [
     {
          id: 1,
          name: "Sweater hoodie",
          price: 76.99,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          category: "T-shirt",
          image: 'images/hoodie-b-yl.png',
          imageAlt : 'hoodie',
          rating : {id : 1, rate : 4, count : 32},
          colors : [
               {
                    id : 1,
                    name : "yellow",
                    image : 'images/hoodie-b-yl.png',
                    class : 'bg-yellow-200'
               },
               {
                    id : 2,
                    name : "red",
                    image : 'images/hoodie-b-r.png',
                    class : 'bg-red-500'
               },
               {
                    id : 3,
                    name : "black",
                    image : 'images/hoodie-b-b.png',
                    class : 'bg-gray-900'
               },
               {
                    id : 4,
                    name : "white",
                    image : 'images/hoodie-b-w.png',
                    class : 'bg-slate-200'
               },
               {
                    id : 5,
                    name : "blue",
                    image : 'images/hoodie-b-bl.png',
                    class : 'bg-blue-500'
               },
          ],
          sizes: [
               {id : 1, name: 'XXS'},
               {id : 2, name: 'XS'},
               {id : 3, name: 'S'},
               {id : 4, name: 'M'},
               {id : 4, name: 'L'},
               {id : 5, name: 'XL'},
               {id : 5, name: 'XXL'},
               {id : 6, name: 'XXXL'},
             ],
     },
     {
          id: 2,
          name: "casual shoe",
          price: 160.99,
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          category: "Shoe",
          image: 'images/shoe-yl.png',
          imageAlt : 't-shirt',
          rating : {id : 1, rate : 4, count : 32},
          colors : [
               {
                    id : 1,
                    name : "yellow",
                    image : 'images/shoe-yl.png',
                    class : 'bg-yellow-200'
               },
               {
                    id : 2,
                    name : "red",
                    image : 'images/shoe-r.png',
                    class : 'bg-red-500'
               },
               {
                    id : 4,
                    name : "white",
                    image : 'images/shoe-w.png',
                    class : 'bg-slate-200'
               },
               {
                    id : 5,
                    name : "blue",
                    image : 'images/shoe-sky.png',
                    class : 'bg-sky-300'
               },
          ],

          sizes: [
               {id : 1, name: '35'},
               {id : 1, name: '36'},
             ],
     },
     {
          id: 3,
          name: "plain tshirt",
          price: 20,
          description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          category: "Tshirt",
          image: 'images/tshirt-b.png',
          imageAlt : 't-shirt',
          rating : {id : 1, rate : 5, count : 12},
          colors : [
               {
                    id : 1,
                    name : "black",
                    image : 'images/tshirt-b.png',
                    class : 'bg-gray-900'
               },
               {
                    id : 6,
                    name : "white",
                    image : 'images/tshirt-w.png',
                    class : 'bg-slate-200'
               },
               {
                    id : 2,
                    name : "red",
                    image : 'images/tshirt-r.png',
                    class : 'bg-red-500'
               },
               {
                    id : 4,
                    name : "green",
                    image : 'images/tshirt-g.png',
                    class : 'bg-green-400'
               },
               {
                    id : 5,
                    name : "blue",
                    image : 'images/tshirt-bl.png',
                    class : 'bg-blue-300'
               },
          ],

          sizes: [
               {id : 1, name: 'M'},
               {id : 2, name: 'L'},
               {id : 3, name: 'XL'},
             ],
     },
     {
          id: 4,
          name: "Backpack",
          price: 20,
          description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
          category: "Backpack",
          image: 'images/backpack-1.png',
          imageAlt : 't-shirt',
          rating : {id : 1, rate : 5, count : 112},
          colors : [
               {
                    id : 1,
                    name : "gray",
                    image : 'images/backpack-1.png',
                    class : 'bg-slate-300'
               },
               {
                    id : 6,
                    name : "black",
                    image : 'images/backpack-2.png',
                    class : 'bg-black'
               },
          ],

          sizes: [
               {id : 1, name: 'standard'}
             ],
     },
     
     ]
export const ProductDemi = {
     id : 1,
     name: '',
     price: 192,
     rating: {id: 1, rate : 3, count : 20},
     description : "",
     category : "",
     image: '',
     imageAlt : "",
     colors: [
       { id : 1, name: 'White', class: 'bg-white', image : ''},
       { id : 1, name: 'Gray', class: 'bg-gray-200', image : ''},
       { id : 1, name: 'Black', class: 'bg-gray-900', image : ''},
     ],
     sizes: [
       {id : 1, name: 'XXS'},
       {id : 1, name: 'XS'},
       {id : 1, name: 'S'},
       {id : 1, name: 'M'},
       {id : 1, name: 'L'},
       {id : 1, name: 'XL'},
       {id : 1, name: 'XXL'},
       {id : 1, name: 'XXXL'},
     ],
   }
   