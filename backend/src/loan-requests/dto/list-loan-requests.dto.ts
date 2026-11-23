import { Type, IsOptional } from "class-transformer";

export class ListLoanRequestsDto {
  @IsOptional()  // La conversión de la consulta a número ya está preparada.
  @Type(() => Number)
  toolId?: number;
}

