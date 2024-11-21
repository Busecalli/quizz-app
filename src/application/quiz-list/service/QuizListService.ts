import { Result } from "@/core/utility/ResultType";
import { API_ROUTE } from "@/application/constants/ApiRoutes";
import { SWAL_MESSAGES } from "@/core/constants/SwalMessages";
import { SERVICE } from "@/application/constants/Service";
import { ServiceException } from "@/core/exception/base/ServiceException";
import { UnknownCause } from "@/core/cause/UnknownCause";
import { IQuizListService } from "@/domain/quiz-list/service/IQuizListService";
import { QuizListResponseDto } from "@/domain/quiz-list/dto/QuizListResponseDto";
import { BadRequestException } from "@/core/exception/BadRequestException";
import { BadRequestCause } from "@/core/cause/BadRequestCause";
import i18n from "@/presentation/language/i18n";
import { ApiService } from "@/infrastructure/api/ApiService";

export default class QuizListService implements IQuizListService {
  async getList(
  ): Promise<Result<QuizListResponseDto[]>> {
    try {
      return await new ApiService()
        .get<QuizListResponseDto[]>(API_ROUTE.QUIZ_LIST)
        .then((response) => {
          return Result.ok<QuizListResponseDto[]>(response.data);
        })
        .catch(() => {
          return Result.fail<QuizListResponseDto[]>(
            new BadRequestException(
              new BadRequestCause(
                i18n.global.t(SWAL_MESSAGES.ERROR.API_ERROR_MESSAGE)
              )
            )
          );
        });
    } catch (error) {
      return Result.fail<string>(
        new ServiceException(new UnknownCause(SERVICE.QUIZ_LIST))
      );
    }
  }
}
