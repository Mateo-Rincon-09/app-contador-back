import { prisma } from "../../../config/prisma";
import { MovimientoDto } from "../../../domain";


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
}