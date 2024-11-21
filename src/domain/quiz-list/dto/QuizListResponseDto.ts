import { BaseDTO } from "@/core/base/BaseDTO";

export interface QuizListResponseDto extends BaseDTO{
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
