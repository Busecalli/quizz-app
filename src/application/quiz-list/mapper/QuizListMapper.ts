import { BaseDTO } from "@/core/base/BaseDTO";
import { BaseDomain } from "@/core/base/BaseDomain";
import { IMapper } from "@/core/base/IMapper";
import { UnknownCause } from "@/core/cause/UnknownCause";
import { MapperException } from "@/core/exception/base/MapperException";
import { Result } from "@/core/utility/ResultType";
import { MAPPER } from "@/application/constants/Mapper";
import { QuizListRequestDto } from "@/domain/quiz-list/dto/QuizListRequestDto";
import { QuizListResponseDto } from "@/domain/quiz-list/dto/QuizListResponseDto";
import { QuizListModel } from "@/domain/quiz-list/model/QuizListModel";

export class QuizListMapper implements IMapper<BaseDomain, BaseDTO> {
  mapToDomain(dto: QuizListResponseDto[]): Result<QuizListModel[]> {
    try {
      const quizList: QuizListModel[] = [];

      if (dto.length > 0) {
        for (const item of dto) {
          const quizListModel: QuizListModel = {
            id: item.id,
            userId: item.userId,
            body: item.body,
            title: item.title,
          };

          quizList.push(quizListModel);
        }
      }

      return Result.ok(quizList);
    } catch {
      return Result.fail(
        new MapperException(new UnknownCause(MAPPER.QUIZ_LIST))
      );
    }
  }

  mapToDTO(domain: QuizListModel): Result<QuizListRequestDto> {
    try {
      const quizRequest = new QuizListRequestDto();

      return Result.ok(quizRequest);
    } catch {
      return Result.fail(
        new MapperException(new UnknownCause(MAPPER.QUIZ_LIST))
      );
    }
  }
}
