#  [APIGateway](https://apigateway-p29.herokuapp.com/) ![GraphQL](https://cdn.iconscout.com/icon/free/png-256/graphql-3521468-2944912.png)
- ## User: 

```
mutation{
  newUser(
    firstname: String
    lastname:  String
    username:  String
    password:  String
    email:  String
    isadmi: false
  ) {
    refresh
    access
  }
}
```
```
mutation{
  loginUser(
    username:  String
    password:  String
  ) {
    refresh
    access 
  }
}
```
```
mutation{
  refreshToken ( refresh :String) {
    access
  }
}
```
```
query{
  userById(id:Int ){
    id
    email
  }
}
```
```
query{
  users{
    id
    isadmi
  }
}
```
```
mutation{
  updateUser(
    id:
    firstname:  String
    lastname:  String
    username:  String
    password:  String
    email:  String
    isadmi: false
  ) {
    message
  }
}
```
```
mutation{
  deleteUser(id: Int){
    message
  }
}
```

- ## Producto: 
```
mutation{
newProduct(
  id:  String,
   productName:  String, 
   description:  String, 
   basePrice: Float,
    category:  String) {
      id
      productName
}
}
```
```
query{
  productById(id: String){
    productName
    basePrice
  }
}
```
```
mutation{
  newProductWithAuction(
    id : String
    productName: String
    basePrice: Float
    category:  String
    time_starting: "2021-11-02T15:58:44.767594-06:00"
    time_ending: "2021-12-09T15:58:44.767594-06:00"
  ){
    message

  }
}
```
```
mutation{
  deleteProductAuction(
    id_product:  String
    id_auction: Int
  ){
    message
  }
}
```

- ## Subasta:
```
mutation  {
  newAuction(
    product:String
    base_offer:Float
    time_starting:"2021-11-29T15:58:44.767594-06:00"
    time_ending:"2021-12-05T15:58:44.767594-06:00"
  )
  {
    message
  }
}
```
```
query{
  auctions{
    auction_id
  }
}
```
```
query{
  auctionById(id: Int){
    auction_id
    product
  }
}
```
```
mutation{
  deleteAuction(id:Int) {
    message
  }
}
```


- ## Licitaciones o pujas:
```
query{
  bids{
    auction
    bid_id
    user
    offer
  }
}
```
```
query{
  bidByUser(
    user:Int
  ){
    auction
    user
    offer
  }
}
```
```
query {
  bidByUserAuction (
    user: Int
    auction: Int
  ) {
    bid_id
    auction
    offer
  }
}
```
```
mutation{newBid(
 
  user:Int
  auction:Int
  offer:Float 
){
message
}
}
```
```
mutation{deleteBid(
  user:Int
  auction:Int
){
  message
}
}
```
