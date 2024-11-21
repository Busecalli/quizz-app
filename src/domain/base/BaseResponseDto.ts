import { BaseDTO } from "../../core/base/BaseDTO";

export interface BaseResponseDto<T> extends BaseDTO {
  data?: Array<T> | null;
}
