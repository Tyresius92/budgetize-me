import customScalarResolvers from "./custom-scalars";
import userResolvers from "./user";
import messageResolvers from "./message";
import transactionResolvers from "./transaction";

export default [
  customScalarResolvers,
  userResolvers,
  messageResolvers,
  transactionResolvers,
];
