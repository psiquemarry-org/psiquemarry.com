import { Link } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'
import '../css/footer.css'

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__top">
      <div className="site-footer__brand">
        <img src={logo} alt="Psiquê" />
        <p>
          Semijoias desenhadas para acompanhar cada fase sua, com acabamento
          de joalheria e peças que você pode montar do seu jeito.
        </p>
      </div>

      <div className="site-footer__col">
        <span className="eyebrow">Coleções</span>
        <Link to="/colares">Colares</Link>
        <Link to="/brincos">Brincos</Link>
        <Link to="/pulseiras">Pulseiras</Link>
        <Link to="/customize">Monte a sua joia</Link>
      </div>

      <div className="site-footer__col">
        <span className="eyebrow">Atendimento</span>
        <a href="#">Trocas e devoluções</a>
        <a href="#">Cuidados com a peça</a>
        <a href="#">Fale conosco</a>
      </div>

      <div className="site-footer__col">
        <span className="eyebrow">Psiquê</span>
        <a href="#">Nossa história</a>
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
      </div>
    </div>

    <hr className="hairline" />

    <div className="container site-footer__bottom">
      <span>© {new Date().getFullYear()} Psiquê. Todos os direitos reservados.</span>
      <span>Feito à mão, pensado por você.</span>
    </div>
  </footer>
)

export default Footer
