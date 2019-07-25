import { IQuery } from './IQuery';
export interface IQueryBuilder {
    all(): IQuery;
    byId(id: string): IQuery;
    byProperty(propName: string, propValue: string | number | boolean | Date): IQuery;
    byProperties(dict: any): IQuery;
}
