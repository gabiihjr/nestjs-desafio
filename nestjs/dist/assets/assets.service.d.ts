import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
export declare class AssetsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: {
        id: string;
        symbol: string;
    }): void;
    all(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
}
