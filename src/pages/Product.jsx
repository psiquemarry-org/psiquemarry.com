import { Link, useParams } from 'react-router-dom'
import Img from '../components/Img'
import NotFound from './NotFound'
import { categories, byCategory, find, wa } from '../data/catalog'

const Product = () => {
  const { categoria, slug } = useParams()
  const p = find(categoria, slug)
  if (!p) return <NotFound />
  const cat = categories[categoria]
  const related = byCategory(categoria).filter((x) => x.slug !== p.slug).slice(0, 4)

  return (
    <>
      <nav className="crumbs pad" aria-label="Breadcrumb">
        <Link to="/" viewTransition>Início</Link><span>/</span><Link to={`/${categoria}`} viewTransition>{cat.title}</Link><span>/</span>{p.name}
      </nav>
      <section className="pdp">
        <div className="gallery">
          {p.images.map((src, i) => (
            <div className="media" key={i} style={i === 0 ? { viewTransitionName: `psq-${p.ref}` } : undefined}>
              <Img src={src} alt={`${p.type} ${p.name} ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="info">
          <p className="eyebrow">{p.type}</p>
          <h1>{p.name}</h1>
          <p className="lead">{p.description}</p>
          <dl>
            <div><dt>Metal</dt><dd>{p.metal}</dd></div>
            <div><dt>Pedra</dt><dd>{p.stone}</dd></div>
            <div><dt>Referência</dt><dd>{p.ref}</dd></div>
          </dl>
          <a className="btn btn-dark" href={wa(`Olá! Tenho interesse na peça ${p.type} ${p.name} (${p.ref}).`)} target="_blank" rel="noreferrer">Consultar pelo WhatsApp</a>
          <Link className="btn btn-line" to="/customize" viewTransition>Personalizar uma peça</Link>
        </div>
      </section>
      <section className="block">
        <div className="section-head"><p className="eyebrow">Você também pode gostar</p><h2>Outras peças</h2></div>
        <div className="grid">
          {related.map((r) => (
            <Link to={`/${r.categoria}/${r.slug}`} viewTransition className="product" key={r.ref}>
              <div className="media" style={{ viewTransitionName: `psq-${r.ref}` }}><Img src={r.images[0]} alt={`${r.type} ${r.name}`} /></div>
              <h3>{r.type} {r.name}</h3><span>{r.metal}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Product
