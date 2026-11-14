import { Link } from 'react-router-dom'
import Img from '../components/Img'
import { images } from '../data/images'
import { categories, byCategory } from '../data/catalog'

const steps = [
  ['01', 'Escolha a base', 'Anel, colar, brinco ou pulseira.'],
  ['02', 'Defina o metal', 'Ouro 18k, ródio branco ou ouro rosé.'],
  ['03', 'Adicione os detalhes', 'Pedras naturais, pérolas e pingentes.'],
  ['04', 'Veja ao vivo', 'Cada escolha aparece na hora.'],
]
const perks = [
  ['Materiais naturais', 'Pedras e pérolas selecionadas.'],
  ['Banho de ouro 18k', 'Brilho que permanece.'],
  ['Feito à mão', 'Acabamento artesanal.'],
  ['Garantia Psiquê', '12 meses de assistência.'],
]
const featured = ['colares', 'brincos', 'pulseiras', 'aneis'].map((c) => byCategory(c)[0])

const Home = () => (
  <>
    <section className="hero">
      <Img src={images.hero} alt="Joia Psiquê" loading="eager" fetchPriority="high" />
      <div className="hero-copy">
        <p className="eyebrow">Joias e semijoias naturais</p>
        <h1>Sua joia,<br />do seu jeito</h1>
        <Link to="/customize" viewTransition className="btn btn-light">Criar minha joia</Link>
      </div>
    </section>

    <section className="intro reveal">
      <p className="eyebrow">Psiquê®</p>
      <h2>Delicadeza que conta a sua história</h2>
      <p>Semijoias com banho de ouro e materiais naturais, desenhadas para durar e acompanhar você em todos os momentos.</p>
    </section>

    <section className="tiles">
      {Object.entries(categories).map(([k, c]) => (
        <Link to={`/${k}`} viewTransition className="tile reveal" key={k}>
          <div className="media"><Img src={images.pool[k][0]} alt={c.title} /></div>
          <span>{c.title}</span>
        </Link>
      ))}
    </section>

    <section className="split">
      <div className="split-media"><Img src={images.customize} alt="Criação ao vivo" /></div>
      <div className="split-copy reveal">
        <p className="eyebrow">Criação ao vivo</p>
        <h2>Crie a sua joia, peça por peça</h2>
        <p className="lead">Escolha cada detalhe e acompanhe a sua joia ganhar forma em tempo real. Uma peça única, feita por você.</p>
        <ol className="steps">
          {steps.map(([n, t, d]) => (
            <li key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></li>
          ))}
        </ol>
        <Link to="/customize" viewTransition className="btn btn-dark">Começar a criar</Link>
      </div>
    </section>

    <section className="block">
      <div className="section-head reveal"><p className="eyebrow">Seleção</p><h2>Os queridinhos da Psiquê</h2></div>
      <div className="grid">
        {featured.map((p) => (
          <Link to={`/${p.categoria}/${p.slug}`} viewTransition className="product reveal" key={p.ref}>
            <div className="media" style={{ viewTransitionName: `psq-${p.ref}` }}><Img src={p.images[0]} alt={`${p.type} ${p.name}`} /></div>
            <h3>{p.type} {p.name}</h3><span>{p.metal}</span>
          </Link>
        ))}
      </div>
    </section>

    <section className="editorial">
      <Img src={images.editorial} alt="Editorial Psiquê" />
      <div className="editorial-copy reveal">
        <p className="eyebrow">Feito para durar</p>
        <h2>Materiais naturais,<br />acabamento impecável</h2>
        <Link to="/customize" viewTransition className="btn btn-light">Criar minha joia</Link>
      </div>
    </section>

    <section className="perks">
      {perks.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
    </section>
  </>
)

export default Home
