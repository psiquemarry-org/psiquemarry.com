import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Customize from './pages/Customize'
import NotFound from './pages/NotFound'

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="customize" element={<Customize />} />
      <Route path=":categoria" element={<Catalog />} />
      <Route path=":categoria/:slug" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
