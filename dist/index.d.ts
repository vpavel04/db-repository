import { DbObjectId } from './DbObjectId';
import { IDbObject } from './IDbObject';
import { IQuery } from './IQuery';
import { IQueryBuilder } from './IQueryBuilder';
import { IRepository } from './IRepository';
export interface IModuleFactory {
    createRepository: <T extends IDbObject>(opts: any) => IRepository<T>;
    createQueryBuilder: (opts: any) => IQueryBuilder;
}
export declare const use: (factoryImpl: IModuleFactory) => void;
export declare const repo: <T extends IDbObject>(opts: any) => IRepository<T>;
export declare const query: (opts?: any) => IQueryBuilder;
export { DbObjectId, IRepository, IQuery, IDbObject, IQueryBuilder };
