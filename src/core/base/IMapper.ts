import { Result } from "../utility/ResultType";

export interface IMapper<BaseDomain, BaseDTO> {
  mapToDomain(dto: BaseDTO): BaseDomain;
  mapToDTO(model: BaseDomain): Result<BaseDTO>;
}
