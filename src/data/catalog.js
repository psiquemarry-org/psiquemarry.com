import { images } from './images'

export const WHATSAPP = '5511953073006'
export const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export const categories = {
  colares: { title: 'Colares', singular: 'Colar', intro: 'Correntes, gargantilhas e pingentes com acabamento refinado, para compor o seu estilo.' },
  brincos: { title: 'Brincos', singular: 'Brincos', intro: 'Do delicado ao marcante: brincos pensados para iluminar o rosto em qualquer ocasião.' },
  pulseiras: { title: 'Pulseiras', singular: 'Pulseira', intro: 'Pulseiras e braceletes que unem leveza e presença, no ouro ou no ródio.' },
  aneis: { title: 'Anéis', singular: 'Anel', intro: 'Anéis solitários, aparadores e peças esculturais com banho de alta durabilidade.' },
}

const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')

const make = (cat, list) =>
  list.map(([name, metal, stone], i) => {
    const pool = images.pool[cat]
    return {
      slug: slug(name),
      categoria: cat,
      name,
      type: categories[cat].singular,
      metal,
      stone,
      ref: `PSQ-${cat.slice(0, 2).toUpperCase()}${String(i + 1).padStart(3, '0')}`,
      images: [pool[i % 4], pool[(i + 1) % 4], pool[(i + 2) % 4]],
      description: `${categories[cat].singular} ${name} em ${metal.toLowerCase()}, com ${stone === 'Sem pedra' ? 'design liso e atemporal' : stone.toLowerCase()}. Acabamento artesanal e banho de alta durabilidade.`,
    }
  })

export const products = [
  ...make('colares', [['Lunar', 'Ouro 18k', 'Pérola'], ['Aurora', 'Ouro 18k', 'Zircônia'], ['Véu', 'Ródio branco', 'Zircônia'], ['Orbe', 'Ouro 18k', 'Sem pedra'], ['Brisa', 'Ouro rosé', 'Madrepérola'], ['Éden', 'Ródio branco', 'Pérola'], ['Solis', 'Ouro 18k', 'Zircônia'], ['Cálice', 'Ouro rosé', 'Sem pedra']]),
  ...make('brincos', [['Pérola', 'Ouro 18k', 'Pérola'], ['Gota', 'Ródio branco', 'Zircônia'], ['Argola Fina', 'Ouro 18k', 'Sem pedra'], ['Estela', 'Ouro 18k', 'Zircônia'], ['Nuvem', 'Ouro rosé', 'Madrepérola'], ['Halo', 'Ródio branco', 'Sem pedra'], ['Lume', 'Ouro 18k', 'Pérola'], ['Ária', 'Ouro rosé', 'Zircônia']]),
  ...make('pulseiras', [['Éter', 'Ouro 18k', 'Sem pedra'], ['Rio', 'Ródio branco', 'Zircônia'], ['Elo', 'Ouro 18k', 'Sem pedra'], ['Selene', 'Ouro 18k', 'Pérola'], ['Fio', 'Ouro rosé', 'Zircônia'], ['Onda', 'Ródio branco', 'Sem pedra'], ['Trama', 'Ouro 18k', 'Madrepérola'], ['Ciclo', 'Ouro rosé', 'Sem pedra']]),
  ...make('aneis', [['Aurora', 'Ouro 18k', 'Zircônia'], ['Solitário', 'Ródio branco', 'Zircônia'], ['Lua', 'Ouro 18k', 'Pérola'], ['Trilho', 'Ouro rosé', 'Sem pedra'], ['Arco', 'Ouro 18k', 'Sem pedra'], ['Cristal', 'Ródio branco', 'Zircônia'], ['Duna', 'Ouro rosé', 'Madrepérola'], ['Eclipse', 'Ouro 18k', 'Zircônia']]),
]

export const byCategory = (cat) => products.filter((p) => p.categoria === cat)
export const find = (cat, s) => products.find((p) => p.categoria === cat && p.slug === s)
