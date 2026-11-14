// Imagens mockadas (Unsplash). Substitua pelas suas fotos:
// import hero from '../assets/img/hero.jpg' e troque a URL correspondente.
const u = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const A = 'photo-1611591437281-460bfbe1220a'
const B = 'photo-1573408301185-9146fe634ad0'
const C = 'photo-1617038220319-276d3cfab638'
const D = 'photo-1599643478518-a784e5dc4c8f'
const E = 'photo-1515562141207-7a88fb7ce338'
const F = 'photo-1605100804763-247f67b3557e'
const G = 'photo-1535632066927-ab7c9ab60908'

export const images = {
  hero: u(E, 2400),
  customize: u(F, 1600),
  editorial: u(G, 2400),
  // pool de fotos por categoria (usadas nas peças do catálogo)
  pool: {
    colares: [B, E, G, D].map((i) => u(i, 900)),
    brincos: [C, F, A, G].map((i) => u(i, 900)),
    pulseiras: [D, G, B, E].map((i) => u(i, 900)),
    aneis: [A, F, C, D].map((i) => u(i, 900)),
  },
}
