import { ConnectionOptions } from "typeorm";
import { Grid } from "../types/grid";
import { User } from "../types/user";
import { UserOption } from "../types/user_option";

export const config: ConnectionOptions = {
  type: "postgres",
  host: "db",
  port: 5432,
  username: "casinoplus",
  password: "casinoplus",
  database: "casinoplus",
  entities: [Grid, User, UserOption],
  synchronize: true,
  logging: false,
};
