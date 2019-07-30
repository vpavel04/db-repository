import { IQuery } from './IQuery';
import { DbObjectId } from './DbObjectId';
export interface IQueryBuilder {
    all(): IQuery;
    byId(id: string | DbObjectId): IQuery;
    byProperty(propName: string, propValue: string | number | boolean | Date | DbObjectId): IQuery;
    byProperties(dict: any): IQuery;
}
