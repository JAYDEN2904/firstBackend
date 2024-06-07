import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  createdBy?: string | null;
  orderDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
