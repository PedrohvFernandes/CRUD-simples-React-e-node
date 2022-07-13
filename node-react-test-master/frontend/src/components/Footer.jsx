import React, { useState } from 'react'
import '../components/Footer.css'
import {api} from '../lib/api'

export default function Footer({getList}) {
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState('')
  
  async function handleSubmitFeedback(event) {
    event.preventDefault()

    console.log({
      nome,
      quantidade
    })

    try{
      const response = await api.post('/itens',{
        nome,
        quantidade
      })

      console.log(response.data)
      getList()
    }catch(e){
      console.log(e)
      return
    }

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
