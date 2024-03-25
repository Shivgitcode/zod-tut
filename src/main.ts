import { z } from "zod";

// type User = {
//   username: string;
// };

const UserSchema = z.object({
  username: z.string().min(3), //min length 3
  age: z.number().gt(0).optional(), //gt than zero
  birthday: z.date().optional(),
  isProgrammer: z.boolean().default(true).optional(), // can be null
  test: z.any(),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: "shivansh",
  age: 20,
  birthday: new Date(),
};

console.log(UserSchema.parse(user));
