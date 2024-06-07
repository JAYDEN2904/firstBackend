import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  createdBy: string | null;
  id: string;
  orderDate: Date | null;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
