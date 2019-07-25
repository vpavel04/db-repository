import { IQuery } from './IQuery';

export interface IQueryBuilder {
    all(): IQuery;
    byId(id: string): IQuery;
    byProperty(propName: string, propVal: string | number | boolean | Date): IQuery;
}