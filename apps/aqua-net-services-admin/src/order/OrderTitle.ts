import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "createdBy";

export const OrderTitle = (record: TOrder): string => {
  return record.createdBy?.toString() || String(record.id);
};
