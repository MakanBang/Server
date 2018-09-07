# Server

Server Makan Bang

List of user routes 

ROUTE | METHOD | DESCRIPTION
------|--------|------------
/users/signup | POST | register to app
/users/signin | POST | signin to app
/users/loginFacebook | POST | signin to app with FB


List of Food Routes

ROUTE | METHOD | DESCRIPTION
------|--------|------------
/foods| GET | Get Random Food
/foods/search/? | GET | Search Foods

List of Weather Routes

ROUTE | METHOD | DESCRIPTION
------|--------|------------
/weather/:city| GET | Get weather of city


List of Index Routes

ROUTE | METHOD | DESCRIPTION
------|--------|------------
`/zomato/`|GET| getAllCategoryFood  
`/zomato/city/:q `|GET| getCitiesSearch 
`/zomato/collection/:id  `|GET| getCollection
`/zomato/cuisines/:id`|GET| getCuisie 
`/zomato/establishments/:id  `|GET| getEstablishments  
`/zomato/geocode/:lat/:lo`|GET| getGeocode 
`/zomato/locdetail/:id/:type `|GET| getLocationDetail 
`/zomato/location/:query `|GET| getLocation
`/zomato/restoran/menu/:restoid  `|GET| getDailyMenu
`/zomato/restoran/:restoi`|GET| getRestotan
`/zomato/review/:restoid `|GET| getRestotanReviews
`/zomato/search/:category/:cuisines/:`|GET| getSearch

Usage

```
npm install 
npm run dev
```
