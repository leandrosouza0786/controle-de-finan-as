import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from './pages/categories/shared/category.modal'
import { Entry } from './pages/entries/shared/entry.model'
export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      {id: 1, name: 'Moradia', description: 'Pagamento de Contas da Casa'},
      {id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
      {id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc...'},
      {id: 1, name: 'Salário', description: 'Recebimentos'},
      {id: 1, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ]
    const entries: Entry[] = [
      {id: 1, name: 'Academia', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2019', amount: '70', type: 'expense', description: 'qualquer coisa'} as Entry,
      {id: 2, name: 'Academia', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2019', amount: '70', type: 'renevue', description: 'qualquer coisa'} as Entry

    ]
    return { categories ,entries}
  }
}
