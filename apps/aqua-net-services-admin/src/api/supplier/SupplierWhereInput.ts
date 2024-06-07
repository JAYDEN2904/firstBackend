import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
