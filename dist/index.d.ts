import { IRepository } from './IRepository';
import { IQuery } from './IQuery';
import { IDbObject } from './IDbObject';
import { IQueryBuilder } from './IQueryBuilder';
export interface IModuleFactory {
    createRepository: <T extends IDbObject>(opts: any) => IRepository<T>;
    createQueryBuilder: (opts: any) => IQueryBuilder;
}
export declare const use: (factoryImpl: IModuleFactory) => void;
export declare const repo: <T extends IDbObject>(opts: any) => IRepository<T>;
export declare const query: (opts?: any) => IQueryBuilder;
export { IRepository, IQuery, IDbObject, IQueryBuilder };
