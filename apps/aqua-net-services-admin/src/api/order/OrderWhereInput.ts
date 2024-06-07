import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
};
