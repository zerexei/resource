import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class {
    _db = prisma;

    // // TODO: check if this is better
    // constructor() {
    //     this._db = prisma;
    // }

    test() {
        return 'test/test'
    }
}