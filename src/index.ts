
import { DbObjectId } from './DbObjectId';
import { IDbObject } from './IDbObject';
import { IQuery } from './IQuery';
import { IQueryBuilder } from './IQueryBuilder';
import { IRepository } from './IRepository';

export interface IModuleFactory {
    createRepository: <T extends IDbObject>(opts: any) => IRepository<T>;
    createQueryBuilder: (opts: any) => IQueryBuilder;
}
let factory: IModuleFactory;

export const use = (factoryImpl: IModuleFactory) => {
    factory = factoryImpl;
}
export const repo = <T extends IDbObject>(opts: any): IRepository<T> => {
    if (!factory) {
        throw new Error("no implementation found");
    }
    return factory.createRepository(opts);
}
export const query = (opts?: any): IQueryBuilder => {
    if (!factory) {
        throw new Error("no implementation found");
    }
    return factory.createQueryBuilder(opts);
}

export { DbObjectId, IRepository, IQuery, IDbObject, IQueryBuilder };
