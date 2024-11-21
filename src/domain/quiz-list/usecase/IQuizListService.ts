import { IUsecase } from "@/core/base/IUsecase";
import { QuizListModel } from "../model/QuizListModel";
import { Result } from "@/core/utility/ResultType";

export interface IQuizListUseCase extends IUsecase<QuizListModel> {
  execute(model: QuizListModel): Promise<Result<QuizListModel>>;
}
