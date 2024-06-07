import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
