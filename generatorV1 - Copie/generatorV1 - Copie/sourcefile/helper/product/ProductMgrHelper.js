function getProductTopFiveNewProduct(){
  let productCollection = dw.catalog.ProductMgr.queryProduct("product.master = 1 && product.custom.new = 1");
  let productIterator = productCollection.iterator();
  let nbPushed = 0;
  let arrayToReturn = [];
  while(productIterator.hasNext() && nbPushed < 6){
    arrayToReturn.push(productIterator.next());
  }
  return arrayToReturn;
}
