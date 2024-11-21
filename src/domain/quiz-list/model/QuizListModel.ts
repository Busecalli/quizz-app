import { BaseDomain } from "@/core/base/BaseDomain";

export class QuizListModel extends BaseDomain {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;

  constructor(userId?: number, id?: number, title?: string, body?: string) {
    super();
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
