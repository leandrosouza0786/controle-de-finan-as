import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from './pages/categories/shared/category.modal'

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      {id: 1, name: 'Moradia', description: 'Pagamento de Contas da Casa'},
      {id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
      {id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc...'},
      {id: 1, name: 'Salário', description: 'Recebimentos'},
      {id: 1, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ]
    return { categories }
  }
}
