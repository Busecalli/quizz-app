import { BaseException } from "@/core/base/BaseException";
import { ExceptionCode } from "../ExceptionCode";
import { BaseCause } from "@/core/base/BaseCause";

export class DomainEventException extends BaseException {
  constructor(cause: BaseCause) {
    super(
      ExceptionCode.domainEvent,
      ExceptionCode.domainEvent.toString(),
      cause
    );
  }
}
