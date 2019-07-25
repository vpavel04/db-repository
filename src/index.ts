
import { IRepository } from './IRepository';
import { IQuery } from './IQuery';
import { IDbObject } from './IDbObject';
import { IQueryBuilder } from './IQueryBuilder';

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

export { IRepository, IQuery, IDbObject, IQueryBuilder };
