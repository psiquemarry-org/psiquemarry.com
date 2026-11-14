import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Img from '../components/Img'
import NotFound from './NotFound'
import { categories, byCategory } from '../data/catalog'

const Catalog = () => {
  const { categoria } = useParams()
  const cat = categories[categoria]
  const [filter, setFilter] = useState('Todos')
  const [sort, setSort] = useState('destaques')

  const all = useMemo(() => (cat ? byCategory(categoria) : []), [cat, categoria])
  const options = useMemo(() => ['Todos', ...new Set(all.flatMap((p) => [p.metal, p.stone]).filter((v) => v !== 'Sem pedra'))], [all])
  const list = useMemo(() => {
    const l = filter === 'Todos' ? all : all.filter((p) => p.metal === filter || p.stone === filter)
    return sort === 'nome' ? [...l].sort((a, b) => a.name.localeCompare(b.name)) : l
  }, [all, filter, sort])

  if (!cat) return <NotFound />

  return (
    <>
      <section className="cat-head">
        <nav className="crumbs" aria-label="Breadcrumb"><Link to="/" viewTransition>Início</Link><span>/</span>{cat.title}</nav>
        <h1>{cat.title}</h1>
        <p>{cat.intro}</p>
        <div className="cat-tabs">
          {Object.entries(categories).map(([k, c]) => (
            <Link key={k} to={`/${k}`} viewTransition className={k === categoria ? 'on' : ''}>{c.title}</Link>
          ))}
        </div>
      </section>

      <section className="toolbar">
        <div className="chips" role="group" aria-label="Filtros">
          {options.map((o) => (
            <button key={o} className={o === filter ? 'on' : ''} onClick={() => setFilter(o)}>{o}</button>
          ))}
        </div>
        <div className="sort">
          <span>{list.length} {list.length === 1 ? 'peça' : 'peças'}</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Ordenar">
            <option value="destaques">Destaques</option>
            <option value="nome">Nome (A–Z)</option>
          </select>
        </div>
      </section>

      <section className="grid catalog" key={`${categoria}-${filter}-${sort}`}>
        {list.map((p, i) => (
          <Link to={`/${p.categoria}/${p.slug}`} viewTransition className="product fade" style={{ animationDelay: `${(i % 4) * 70}ms` }} key={p.ref}>
            <div className="media swap" style={{ viewTransitionName: `psq-${p.ref}` }}>
              <Img src={p.images[0]} alt={`${p.type} ${p.name}`} />
              <Img src={p.images[1]} alt="" aria-hidden="true" />
            </div>
            <h3>{p.type} {p.name}</h3>
            <span>{p.metal}{p.stone !== 'Sem pedra' && ` · ${p.stone}`}</span>
          </Link>
        ))}
      </section>
    </>
  )
}

export default Catalog
