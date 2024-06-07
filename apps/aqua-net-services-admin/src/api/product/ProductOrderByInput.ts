import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
