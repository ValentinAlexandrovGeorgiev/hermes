# HermesGift
Official Hermes Gift repository

## Table of Contents
1. [Application Configurations](https://github.com/ValentinAlexandrovGeorgiev/hermes#application-configurations) 
2. [Technology stack](https://github.com/ValentinAlexandrovGeorgiev/hermes#technology-stack) 
3. [Routing](https://github.com/ValentinAlexandrovGeorgiev/hermes#routing) 
4. [Data API](https://github.com/ValentinAlexandrovGeorgiev/hermes#data-api) 
5. [Backend Endpoints](https://github.com/ValentinAlexandrovGeorgiev/hermes#backend-endpoints)

## Application Configurations


## Technology stack
Main languages & libraries :
- React
- Redux
- Webpack
- Babel
- react-router
- lodash
- django
- Postgre


## Routing


## DATA API

###### Product
> - **name**: Product name
> - **description**: Product description
> - **product_id**: Hermes product ID
> - **client_id**: Client product ID
> - **category_id**: Category ID (ForeignKey)
> - **price**: Price
> - **currency**: USD/lv
> - **image_link**: link to cloudinary
> -	**online**: true/false
> - **views**: Number of views


###### Category 					
Category contain products [example](http://hermesgift.bg/index.php/categories/sklad)
>	- **name**: Category name
> - **value**: Category value (for links)
> - **products**: Products in the category
> - **parent_category**: Parent category
> - **category_img**: Category front image
> - **online**: true/false


###### Catalog
PDF Catalogs, [examples](http://hermesgift.bg/index.php/catalogs)
> - **name**: Catalog name
> - **image_link**: Catalog front image (link to cloudinary)
> - **link**: Link to catalog pdf
> - **online**: true/false


###### Assets
Texts [Example 1](http://hermesgift.bg/index.php/for-us) , [Example 2](http://hermesgift.bg/index.php/nashatapechatnitsa)
> - **title**: Asset title
> - **body**: Asset body (HTML or simple text)
> - **asset_id**: Unique asset id
> - **image_link**: Asset front image
> - **online**: true/false

##### Site
Site configurations. Example: Which assets to be displayed on http://hermesgift.bg/index.php/nashatapechatnitsa And other configurations
> - **services**: Array with assets values

## Backend Endpoints

**Product:**

**Get product:**

method: **GET** </br>
endpoint: **/api/product/{id}** </br>
response: </br>
```
{
	name: String,
	description: String,
	price: String,			// 22,00 лв
	product_id: String,
	image_link: String,
	category_id: ForeignKey
}
```

error response:
```
{
	status_code: "NOT_FOUND"
}
```

description: </br>
- If everything is OK with this product, the API returns status 200 and product data. </br>
- If product is not found, the API returns status 404 and NOT_FOUND status_code </br>
- If product is offline, the API returns status 404 and NOT_FOUND status_code </br>
</br>

**Get products from category:**

method: **GET** </br>
endpoint: **/api/products/{category_value}** </br>
response: </br>
```
{
	products: [
		{
			name: String,
			price: String,
			image_link: String,
			product_id: String
		},
		{
			name: String,
			price: String,
			image_link: String,
			product_id: String
		}
	],
	count: Number
}
```
error response: </br>
```
{
	status_code: "NOT_FOUND"
}
```

optional parameters: </br>
**count**: how many products to return. Example: when we want to implement pagination (page size is this count) </br>
**start**: from which product to start the search. Same Example ^ </br>

description: </br>
If category is not found, the API returns status 404 and NOT_FOUND status_code </br>
Return only online products </br>

</br>
</br>

**Category:** </br>
 
**Get categories:** </br>

method: **GET** </br>
endpoint: **/api/categories** </br>
response: </br>
```
{
	categories: [
		{
			name: String,
			value: String,
			category_img: String
		},
		{
			name: String,
			value: String,
			category_img: String
		}
	],
	count: Number
}
```

description: </br>
Returns only online categories </br>
</br>

**Catalog:** </br>

**Get catalogs:** </br>

method: **GET** </br>
endpoint: **/api/catalogs** </br> 
response: </br>
```
{
	catalogs: [
		{
			name: String,
			image_link: String,
			link: String
		},
		{
			name: String,
			image_link: String,
			link: String
		}
	],
	count: Number
}
```
description: </br>
Returns only online catalogs </br>
</br>

**Asset:** </br>

method: **GET** </br>
endpoint: **/api/asset/{asset_id}** </br>
response: </br>
```
{
	title: String,
	body: String,
	asset_id: String,
	image_link: String
}
```

error response: </br>
```
{
	status_code: "NOT_FOUND"
}
```

description: </br>
Return only online asset </br>
Body is a simple text or html with tags </br>
</br>

**Sites:** </br>

**Get site configuration** </br>

method: **GET** </br>
endpoint: **/api/site/{config}** </br>
Example response: </br>
```
{
	services: [
		Asset,
		Asset
	]
}
```
error response: </br>
```
{
	status_code: "NOT_FOUND"
}
```

description: </br>
Return only online assets </br>
Return only the configuration which you search ({config}) </br>
