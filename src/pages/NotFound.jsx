import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="empty">
    <p className="eyebrow">Erro 404</p>
    <h1>Página não encontrada</h1>
    <p>O endereço que você acessou não existe ou foi movido.</p>
    <Link to="/" className="btn btn-dark">Voltar ao início</Link>
  </section>
)
export default NotFound
