import { ErrorMessage } from "vee-validate";
import { BaseCause } from "../base/BaseCause";
import { BaseException } from "../base/BaseException";
import { ExceptionCode } from "./ExceptionCode";

export class UnknownException extends BaseException {
  constructor(cause: BaseCause) {
    const errorMessage = ErrorMessage.getErrorMessage(cause.cause);
    super(ExceptionCode.unknown, errorMessage, cause);
  }
}
