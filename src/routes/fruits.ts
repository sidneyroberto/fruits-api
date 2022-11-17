import { Router } from 'express'
import { FruitService } from '../services/FruitService'

export const fruitsRouter = Router()

const fruitService = new FruitService()

fruitsRouter.get('/:name', async (req, res) => {
  const { name } = req.params
  const fruit = await fruitService.searchFruit(name)
  if (fruit) {
    return res.json(fruit)
  }

  return res.status(404).json({ message: 'Fruit not found' })
})
