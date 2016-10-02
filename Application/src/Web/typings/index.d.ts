/// <reference path="globals/core-js/index.d.ts" />
/// <reference path="globals/jasmine/index.d.ts" />
/// <reference path="globals/node/index.d.ts" />

declare interface ILocation {
    id: number,
    name: string,
    type: number,
    code?: string
}

declare interface ICountry extends ILocation {

}

declare interface IProvince extends ILocation {

}

declare interface ICity extends ILocation {

}

declare interface IProduct {
    id: number,
    name: string,
    code: string,
    brand: IBrand,
    supplier: ISupplier
}

declare interface IBrand {
    id: number,
    name: string
}

declare interface ISupplier {
    id: number,
    name: string
}

declare interface ITransaction {
    id: number,
    totalAmount: number,
    status: Status,
    costumer: ICostumer
}

declare interface ICostumer {
    id: number
}

declare enum Status {
    Active = 1, Inactive = 2,
    Success = 101, Warning = 102, Error = 103,
    Ok = 200, Created = 201,
}