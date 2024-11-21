import { BaseDTO } from "../../core/base/BaseDTO";

export interface ErrorResponseDTO extends BaseDTO {
  status: number;
  name: string;
  message: string;
  details: object;
}
