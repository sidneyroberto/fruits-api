import axios from 'axios'
import { Fruit } from '../models/Fruit'

export class FruitService {
  async searchFruit(name: string): Promise<Fruit | null> {
    try {
      const { data, status } = await axios.get<Fruit>(
        `https://fruityvice.com/api/fruit/${name.toLowerCase().trim()}`
      )
      if (status == 200) {
        return data
      }
    } catch (error) {
      console.log(error)
    }

    return null
  }
}
