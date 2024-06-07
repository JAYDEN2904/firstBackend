import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  createdBy?: string | null;
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
