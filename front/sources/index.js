import Asset from './controllers/Asset'
import Product from './controllers/Product'
import Products from './controllers/Products'
import Catalog from './controllers/Catalog'
import Config from './controllers/Config'

const Hermes = {
  Asset: new Asset(),
  Product: new Product(),
  Products: new Products(),
  Catalog: new Catalog(),
  Config: new Config()
}

window.__HERMES__ = Hermes

export default Hermes
