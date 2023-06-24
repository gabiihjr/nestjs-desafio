import { AssetsService } from './assets.service';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    all(): import(".prisma/client").Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
        created_at: Date;
        updated_at: Date;
    }, unknown> & {})[]>;
    create(body: {
        id: string;
        symbol: string;
    }): void;
}