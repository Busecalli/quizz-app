import { VALUE } from "@/domain/constants/Value";
import { BaseException } from "../base/BaseException";

export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  private error: BaseException | string;
  private value: T | any;

  public constructor(
    isSuccess: boolean,
    value: T | any,
    error: BaseException | string
  ) {
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this.value = value;

    Object.freeze(this);
  }

  public getValue(): T | any {
    return this.value;
  }

  public getError() {
    return this.error;
  }

  public static ok<U>(value: U): Result<U> {
    return new Result<U>(true, value, VALUE.NULL_STRING);
  }

  public static fail<U>(error: BaseException | string): Result<U> {
    return new Result<U>(false, null, error);
  }
}
