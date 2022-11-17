export class Fruit {
  genus: string = ''
  name: string = ''
  id: number = -1
  order: string = ''
  family: string = ''
  carbohydrates: number = -1
  protein: number = -1
  fat: number = -1
  calories: number = -1
  sugar: number = -1

  constructor(obj: any) {
    const { genus, name, id, order, family, nutritions } = obj
    const { carbohydrates, protein, fat, calories, sugar } = nutritions
    Object.assign(this, {
      genus,
      name,
      id,
      order,
      family,
      carbohydrates,
      protein,
      fat,
      calories,
      sugar,
    })
  }
}
