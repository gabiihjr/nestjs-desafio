import { OrdersService } from './orders.service';
import { OrderStatus } from '@prisma/client';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    all(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        asset_id: string;
        price: number;
        status: OrderStatus;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
    create(body: {
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
}
