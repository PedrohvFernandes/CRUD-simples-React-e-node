import express from 'express'

// Para exportar as rotas para o server
export const routes = express.Router()

const lista = {
  itens: [
    { id: 1, nome: 'Arroz', quantidade: 3 },
    { id: 2, nome: 'Feijão', quantidade: 1 },
    { id: 3, nome: 'Leite', quantidade: 1 },
    { id: 4, nome: 'Maçã', quantidade: 1 }
  ]
}

routes.get('/itens', (req, res) => {
  try {
    return res.status(200).json(lista.itens)
  } catch (e) {
    console.log(e)
    return res.status(500).send()
  }
})

routes.delete('/itens', (req, res) => {
  const { id } = req.body
  console.log(id)
  try {
    let itemId = lista.itens.map(item => {
      if (item.id === id) {
        lista.itens.splice(lista.itens.indexOf(item), 1)
        return item.id
      }
    })

    return res.status(200).json(itemId)
  } catch (e) {
    console.log(e)
    return res.status(500).send()
  }
})
