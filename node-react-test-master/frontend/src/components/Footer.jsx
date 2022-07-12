import React, { useState } from 'react'
import '../components/Footer.css'

export default function Footer() {
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState('')
  
  function handleSubmitFeedback(event) {
    event.preventDefault()

    console.log({
      nome,
      quantidade
    })

  }
  return (
    <form onSubmit={handleSubmitFeedback}>
      <label htmlFor="nome">
        {' '}
        Nome
        <input type="text" onChange={event => setNome(event.target.value)} />
      </label>
      <label htmlFor="Quantidade">
        Quantidade
        <input
          type="text"
          onChange={event => setQuantidade(event.target.value)}
        />
      </label>

      <button type="submit">SALVAR</button>

    </form>
  )
}
