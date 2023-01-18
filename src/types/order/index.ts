export type Order = {
  id: number;
  product: string;
  img: string;
  customer: string;
  date: string;
  amount: number;
  method: string;
  status: "Pending" | "Approved";
};
