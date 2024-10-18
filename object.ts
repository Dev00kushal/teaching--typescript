type User = {
  readonly _id : string,
  name: string;
  email: string;
  isActive: boolean;
  creditCard: number;
};

function createUser(): User {
  return { _id: " ", email: "", creditCard: 0, isActive: true, name: "" };
}
