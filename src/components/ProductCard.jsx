import '../css/product-card.css'

const formatPrice = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const ProductCard = ({ product }) => (
  <article className="product-card">
    <div className="product-card__image">
      <img src={product.image} alt={product.name} loading="lazy" />
    </div>
    <div className="product-card__info">
      <h3>{product.name}</h3>
      <p className="product-card__material">{product.material}</p>
      <span className="product-card__price">{formatPrice(product.price)}</span>
    </div>
  </article>
)

export default ProductCard
