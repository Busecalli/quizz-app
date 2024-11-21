import { RepositoryException } from "@/core/exception/base/RepositoryException";
import { Result } from "@/core/utility/ResultType";
import { REPOSITORY } from "@/application/constants/Repository";
import { BadRequestException } from "@/core/exception/BadRequestException";
import QuizListService from "../service/QuizListService";
import { IQuizListRepository } from "@/domain/quiz-list/repository/IQuizListRepository";
import { UnknownCause } from "@/core/cause/UnknownCause";
import { QuizListResponseDto } from "@/domain/quiz-list/dto/QuizListResponseDto";

const quizListService = new QuizListService();

export class QuizListRepository implements IQuizListRepository {
  async quizList(
  ): Promise<Result<QuizListResponseDto[]>> {
    try {
      return await quizListService
        .getList()
        .then((response) => {
          if (response.isSuccess) {
            return Result.ok<QuizListResponseDto[]>(response.getValue());
          } else {
            return Result.fail<QuizListResponseDto[]>(response.getError());
          }
        })
        .catch((error) => {
          return Result.fail<QuizListResponseDto[]>(
            new BadRequestException(error)
          );
        });
    } catch (error) {
      return Result.fail<string>(
        new RepositoryException(new UnknownCause(REPOSITORY.QUIZ_LIST))
      );
    }
  }
}
