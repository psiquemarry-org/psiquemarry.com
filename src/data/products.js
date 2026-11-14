const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const PHOTO = {
  necklaceGold: 'photo-1611107683227-e9060eccd846',
  necklaceSilver: 'photo-1605897166509-862b9122111a',
  bracelet: 'photo-1602527418456-8b5cd2c7a4c2',
  earring: 'photo-1704445010872-2faefdd733aa',
}

export const categories = [
  {
    slug: 'colares',
    label: 'Colares',
    singular: 'colar',
    hero: img(PHOTO.necklaceGold, 1600),
  },
  {
    slug: 'brincos',
    label: 'Brincos',
    singular: 'brinco',
    hero: img(PHOTO.earring, 1600),
  },
  {
    slug: 'pulseiras',
    label: 'Pulseiras',
    singular: 'pulseira',
    hero: img(PHOTO.bracelet, 1600),
  },
]

export const products = [
  {
    id: 'col-aurora',
    category: 'colares',
    name: 'Colar Aurora',
    material: 'Banhado a ouro 18k',
    price: 189,
    image: img(PHOTO.necklaceGold),
    description: 'Corrente veneziana fina com pingente de gota em zircônia.',
  },
  {
    id: 'col-lumen',
    category: 'colares',
    name: 'Colar Lumen',
    material: 'Prata com banho de ródio',
    price: 219,
    image: img(PHOTO.necklaceSilver),
    description: 'Elo cadeado delicado com fecho ajustável em três alturas.',
  },
  {
    id: 'col-solei',
    category: 'colares',
    name: 'Colar Solei',
    material: 'Banhado a ouro 18k',
    price: 249,
    image: img(PHOTO.necklaceGold, 1000),
    description: 'Camada dupla com medalha circular lisa, acabamento espelhado.',
  },
  {
    id: 'col-bruma',
    category: 'colares',
    name: 'Colar Bruma',
    material: 'Ouro rosé 18k',
    price: 229,
    image: img(PHOTO.necklaceSilver, 1000),
    description: 'Gargantilha minimalista com ponto de luz em zircônia branca.',
  },
  {
    id: 'bri-vera',
    category: 'brincos',
    name: 'Brinco Vera',
    material: 'Banhado a ouro 18k',
    price: 129,
    image: img(PHOTO.earring),
    description: 'Argola média com textura martelada e fecho de pressão.',
  },
  {
    id: 'bri-noa',
    category: 'brincos',
    name: 'Brinco Noa',
    material: 'Prata com banho de ródio',
    price: 139,
    image: img(PHOTO.earring, 1000),
    description: 'Ponto de luz clássico, formato redondo com zircônia central.',
  },
  {
    id: 'bri-iris',
    category: 'brincos',
    name: 'Brinco Iris',
    material: 'Ouro rosé 18k',
    price: 159,
    image: img(PHOTO.earring, 900),
    description: 'Design assimétrico com pendente articulado em gota.',
  },
  {
    id: 'bri-liz',
    category: 'brincos',
    name: 'Brinco Liz',
    material: 'Banhado a ouro 18k',
    price: 149,
    image: img(PHOTO.earring, 800),
    description: 'Ear cuff duplo, combina com qualquer comprimento de cabelo.',
  },
  {
    id: 'pul-alma',
    category: 'pulseiras',
    name: 'Pulseira Alma',
    material: 'Banhado a ouro 18k',
    price: 169,
    image: img(PHOTO.bracelet),
    description: 'Elo cartier fino, três tamanhos de ajuste na extensora.',
  },
  {
    id: 'pul-nina',
    category: 'pulseiras',
    name: 'Pulseira Nina',
    material: 'Prata com banho de ródio',
    price: 179,
    image: img(PHOTO.bracelet, 1000),
    description: 'Correntinha dupla com pingente de coração vazado.',
  },
  {
    id: 'pul-rae',
    category: 'pulseiras',
    name: 'Pulseira Rae',
    material: 'Ouro rosé 18k',
    price: 199,
    image: img(PHOTO.bracelet, 900),
    description: 'Tênis cravejado com zircônias brancas em fileira única.',
  },
  {
    id: 'pul-dora',
    category: 'pulseiras',
    name: 'Pulseira Dora',
    material: 'Banhado a ouro 18k',
    price: 159,
    image: img(PHOTO.bracelet, 800),
    description: 'Berloque amuleto com corrente cadeado, fecho reforçado.',
  },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)

export const getProductsByCategory = (slug) =>
  products.filter((p) => p.category === slug)
