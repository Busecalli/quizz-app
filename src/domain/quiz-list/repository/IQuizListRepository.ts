import { Result } from "@/core/utility/ResultType";
import { IRepository } from "@/core/base/IRepository";
import { QuizListResponseDto } from "../dto/QuizListResponseDto";

export interface IQuizListRepository extends IRepository {
  quizList(
  ): Promise<Result<QuizListResponseDto>>;
}
