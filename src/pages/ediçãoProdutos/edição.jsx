import { useEffect, useState } from 'react'
import Sidebar from "../../componentes/sidebar/sideBar";
import './edição.css'
export default function Edicao() {
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({ id: null, name: '', price: '', URL: '' })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || []
    setProducts(storedProducts)
  }, [])

  const saveToStorage = (updatedProducts) => {
    localStorage.setItem('products', JSON.stringify(updatedProducts))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEditing) {
      const updated = products.map(p =>
        p.id === form.id ? { ...form, price: parseFloat(form.price) } : p
      )
      setProducts(updated)
      saveToStorage(updated)
      setIsEditing(false)
    } else {
      const newProduct = {
        id: Date.now(),
        name: form.name,
        price: parseFloat(form.price),
        URL: form.URL
      }
      const updated = [...products, newProduct]
      setProducts(updated)
      saveToStorage(updated)
    }

    setForm({ id: null, name: '', price: '', URL: '' })
  }

  const Editar = (product) => {
    setForm({ ...product })
    setIsEditing(true)
  }

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id)
    setProducts(updated)
    saveToStorage(updated)
  }

  return (
    <div className="product-manager">
      <Sidebar />
      <h2>Gerenciar Produtos</h2>
      <h3>Cadastro</h3>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome do Produto"
          required
        />
        <input
          name="URL"
          value={form.URL}
          onChange={handleChange}
          placeholder="URL da Imagem"
          required
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Preço"
          required
        />
        <button type="submit">{isEditing ? 'Atualizar' : 'Adicionar'}</button>
      </form>

      <div className="product-list">
        {products.map(product => (
          <div className='card-product-list' key={product.id}>
            <div>
              <img src={product.URL} alt={product.name} style={{ width: '100px', height: 'auto' }} /><br />
              <span>{product.name}</span><br />
              <span><strong>R$ {product.price.toFixed(2)}</strong></span>
            </div>
            <div>
              <button onClick={() => Editar(product)}>Editar</button>
              <button onClick={() => handleDelete(product.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}








