import { OrderStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(input: {
        asset_id: string;
        price: number;
    }): import(".prisma/client").Prisma.Prisma__OrderClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        asset_id: string;
        price: number;
        status: OrderStatus;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    all(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        asset_id: string;
        price: number;
        status: OrderStatus;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
}
