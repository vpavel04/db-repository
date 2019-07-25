import { IDbObject } from './IDbObject';
import { IQuery } from './IQuery';

export interface IRepository<T extends IDbObject> {
    add(object: T): Promise<void>;
    remove(query: IQuery): Promise<number>;
    list(query: IQuery): Promise<T[]>;
    update(object: T): Promise<number>;
}