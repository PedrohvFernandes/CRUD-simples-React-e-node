import ItemsDaTabela from './ItemsDaTabela'
import { api } from '../../lib/api'
import React, { useEffect, useState } from 'react'

export default function Tabela() {
  const [produtos, setProdutos] = useState([{}])

  // Usando axios para requisição HTTP
 async function getList() {
    try {
      const response = await api.get('/itens')
      console.log(response.data)
      setProdutos(response.data)
      return response
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <table>
      <tr>
        <td>Id</td>
        <td>Nome</td>
        <td>Quantidade</td>
        <td>Ação</td>
      </tr>
      {produtos.map(value => {
        return (
          <ItemsDaTabela
            key={value.id}
            id={value.id}
            nome={value.nome}
            getList={getList}
            quantidade={value.quantidade}
          />
        )
      })}
    </table>
  )
}
