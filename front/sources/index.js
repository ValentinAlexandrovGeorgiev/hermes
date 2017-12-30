import Asset from './controllers/Asset'
import Product from './controllers/Product'
import Catalog from './controllers/Catalog'
import Config from './controllers/Config'

const Hermes = {
  Asset: new Asset(),
  Product: new Product(),
  Catalog: new Catalog(),
  Config: new Config()
}

window.__HERMES__ = Hermes

export default Hermes
