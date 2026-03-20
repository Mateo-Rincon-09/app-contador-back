import { IPaginationResponse, PaginationResponse } from "../../../config/pagination";
import { prisma } from "../../../config/prisma";
import { MovimientoDto } from "../../../domain";
import { MovementListRequest } from "../../movements/controller";


export class MovimientoService {
    
    public async enviarMovimiento(movimientoDto: MovimientoDto , userId: string) {
        
            const mov = await prisma.movimiento.create({
                data: {
                    montoIngreso: movimientoDto.montoIngreso,
                    montoGasto: movimientoDto.montoGasto,
                    categoria: movimientoDto.categoria,
                    descripcion: movimientoDto.descripcion,
                    fecha: movimientoDto.fecha,
                    user: {
                        connect:{id: userId}
                    }
                }
            });

            return mov;
        
    }

    public async listarMovimientos(request: MovementListRequest) {
        const { currentPage, pageSize, searchValue, dateRangeActive, dateStart, dateEnd } = request;
        const skip = (currentPage - 1) * pageSize;
        const where: any = {
            userId: request.userId
        };

        if (searchValue) {
            where.OR = [
                { descripcion: { contains: searchValue, mode: 'insensitive' } },
                { categoria: { contains: searchValue, mode: 'insensitive' } }
            ];
        }

        if (dateRangeActive && dateStart && dateEnd) {
            where.fecha = {
                gte: new Date(dateStart),
                lte: new Date(dateEnd)
            };
        }

        const [totalItems, items] = await prisma.$transaction([
            prisma.movimiento.count({ where }),
            prisma.movimiento.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { fecha: 'desc' }
            })
        ]);
        
        //debe retornar con un IPaginationResponse
        const response: IPaginationResponse<MovimientoDto>  = new PaginationResponse<MovimientoDto>(pageSize);
        response.items = items.map((item: any) => MovimientoDto.create({
            montoIngreso: item.montoIngreso,
            montoGasto: item.montoGasto,
            categoria: item.categoria,
            descripcion: item.descripcion,
            fecha: item.fecha
        })[1]!
        );
        response.totalItems = totalItems;
        response.totalPages = Math.ceil(totalItems / pageSize);
        response.currentPage = currentPage;
        return response;

    }
}