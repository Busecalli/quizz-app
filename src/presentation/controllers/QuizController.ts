import { Result } from "@/core/utility/ResultType";
import { IController } from "@/core/base/IController";
import { QuizListUseCase } from "@/application/quiz-list/usecase/QuizListUseCase";
import { QuizListModel } from "@/domain/quiz-list/model/QuizListModel";

export function createQuizController() {
  const quizListUseCase = new QuizListUseCase();
  return new QuizController(quizListUseCase);
}

export class QuizController implements IController {
  constructor(private quizListUseCase: QuizListUseCase) {}

  async quizList(
  ): Promise<Result<QuizListModel[]>> {
    const response = await this.quizListUseCase.execute();

    if (response.isSuccess) {
      return response;
    } else {
      return Result.fail<QuizListModel[]>(response.getError());
    }
  }
}
