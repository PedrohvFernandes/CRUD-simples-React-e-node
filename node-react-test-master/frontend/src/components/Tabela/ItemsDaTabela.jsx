import './ItemsDaTabela.css'
import { api } from '../../lib/api'

export default function ItemsDaTabela({ id, nome, quantidade, getList }) {
  async function deleteItemList() {
    console.log({
      id,
      nome,
      quantidade
    })
    try {
      const response = await api.delete('/itens', {
        data: {
          id: id
        }
      })
      getList()
      return response
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{nome}</td>
        <td>{quantidade}</td>
        <td className="acao-remover" onClick={deleteItemList}>
          Remover
        </td>
      </tr>
    </>
  )
}
