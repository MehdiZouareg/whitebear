let contract : {
  "id" : lastFiveProduct
  "step" :
  [
        {
          "entry" : {
            "module" : "ProductMgrHelper"
            "function" : "getProductTopFiveNewProduct"
            "id" : "productArray"
          },
          "output" : {
              "module" : "ProductMapper"
              "function" : "mapProductListForProductTile"
              "id" : "productListJSON"
              }
        }
  ]

}

GlobalHelper.execute(contract);
