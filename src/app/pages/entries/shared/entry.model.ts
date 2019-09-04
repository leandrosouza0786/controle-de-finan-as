import { Category } from '../../categories/shared/category.modal';
export class Entry{
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public paid?: boolean,
    public date?: string,
    public categoryId?: number,
    public category?: Category
  ){ }

  static types ={
    expense: 'Despesa',
    revenue: 'Receita'
  }

  get paidText(): string{
    return this.paid ? 'Pago' : 'Pedente';
  }
}
