import { IService } from "@/core/base/IService";
import { Result } from "@/core/utility/ResultType";
import { QuizListRequestDto } from "../dto/QuizListRequestDto";
import { QuizListResponseDto } from "../dto/QuizListResponseDto";

export interface IQuizListService extends IService {
  getList(
    request: QuizListRequestDto
  ): Promise<Result<QuizListResponseDto>>;
}
