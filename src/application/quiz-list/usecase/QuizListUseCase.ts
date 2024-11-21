import { IQuizListUseCase } from "@/domain/quiz-list/usecase/IQuizListService";
import { QuizListRepository } from "../repository/QuizListRepository";
import { QuizListModel } from "@/domain/quiz-list/model/QuizListModel";
import { Result } from "@/core/utility/ResultType";
import { QuizListMapper } from "../mapper/QuizListMapper";
import { IQuizListRepository } from "@/domain/quiz-list/repository/IQuizListRepository";

export class QuizListUseCase implements IQuizListUseCase {
  quizListRepository : IQuizListRepository = new QuizListRepository();
  quizListMapper = new QuizListMapper();
  
  async execute(): Promise<Result<QuizListModel>> {
        const response = await this.quizListRepository.quizList();

        if (response.isSuccess) {
          const domain = this.quizListMapper.mapToDomain(
            response.getValue()
          );
          return Result.ok<QuizListModel>(domain.getValue());
        } else {
          return Result.fail<QuizListModel>(response.getError());
        }
  }
}
