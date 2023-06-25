import { Injectable } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';

@Injectable()
export class OrdersService {

    constructor(private prismaService: PrismaService) {}

    create(input: {asset_id: string; price: number}){
        return this.prismaService.order.create({
            data: {
                asset_id: input.asset_id,
                price: input.price,
                status: OrderStatus.OPEN
            },
        });
    }

    all(){
        return this.prismaService.order.findMany();
    }
}
