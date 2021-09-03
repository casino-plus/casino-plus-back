import { createConnection, getRepository } from "typeorm";
import { config } from "../config/db";
import { UserOption } from "../types/user_option";

export function create(userOption: UserOption) {
  createConnection(config)
    .then(async (connection) => {
      await connection.manager.save(userOption);
    })
    .catch((error) => console.log(error));
}

// READ
export function readById(
  id: number,
  callback: (userOption: UserOption) => void
) {
  createConnection(config)
    .then(async (connection) => {
      const repository = getRepository(UserOption);
      let userOption = await repository.findOne(id);
      callback(userOption);
    })
    .catch((error) => console.log(error));
}

// UPDATE
export function update(userOption: UserOption) {
  createConnection(config)
    .then(async (connection) => {
      await connection.manager.save(userOption);
    })
    .catch((error) => console.log(error));
}

// DELETE
export function deleteById(id: number) {
  createConnection(config)
    .then(async (connection) => {
      await connection.manager.remove(id);
    })
    .catch((error) => console.log(error));
}
