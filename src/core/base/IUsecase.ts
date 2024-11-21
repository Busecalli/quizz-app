import { Result } from "../utility/ResultType";

export interface IUsecase<BaseDTO> {
  execute(model: BaseDTO): Promise<Result<BaseDTO>>;
}
