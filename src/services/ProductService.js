import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class ProductService {

    constructor() {
        this.prisma = prisma;
    }

}