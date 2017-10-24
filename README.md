# HermesGift
Official Hermes Gift repository

## DATA API

#####Product
> - name**: Product name
> - **description**: Product description
> - **product_id**: Hermes product ID
> - **client_id**: Client product ID
> - **price**: Price
> - **currency**: USD/lv
> - **image_link**: link to cloudinary
> -	**online**: true/false


#####Category 					
Category contain products (main category: root) [example](http://hermesgift.bg/index.php/categories/sklad)
>	- **name**: Category name
> - **value**: Category value (for links)
> - **parent_category**: Parent category
> - **online**: true/false


#####Catalog
PDF Catalogs, [examples](http://hermesgift.bg/index.php/catalogs)
> - **name**: Catalog name
> - **image_link**: Catalog front image (link to cloudinary)
> - **link**: Link to catalog pdf
> - **online**: true/false


#####Assets
Texts [Example 1](http://hermesgift.bg/index.php/for-us) , [Example 2](http://hermesgift.bg/index.php/nashatapechatnitsa)
> - **title**: Asset title
> - **body**: Asset body (HTML or simple text)
> - **asset_id**: Unique asset id
> - **image_link**: Asset front image
> - **online**: true/false
