export type User = {
  id: number;
  username: string;
  img: string;
  status: "active" | "passive" | "pending";
  email: string;
  age: number;
};
