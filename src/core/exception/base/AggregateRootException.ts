import { BaseException } from "@/core/base/BaseException";
import { ExceptionCode } from "../ExceptionCode";
import { BaseCause } from "@/core/base/BaseCause";

export class AggregateRootException extends BaseException {
  constructor(cause: BaseCause) {
    super(
      ExceptionCode.aggregateRoot,
      ExceptionCode.aggregateRoot.toString(),
      cause
    );
  }
}
