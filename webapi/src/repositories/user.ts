import { createConnection, getRepository } from "typeorm";
import { config } from "../config/db";
import { User } from "../types/user";

// CREATE
export function create(user: User) {
  createConnection(config)
    .then(async (connection) => {
      await connection.manager.save(user);
    })
    .catch((error) => console.log(error));
}

// READ
export function readById(id: number, callback: (user: User) => void) {
  createConnection(config)
    .then(async (connection) => {
      const repository = getRepository(User);
      let user = await repository.findOne(id);
      callback(user);
    })
    .catch((error) => console.log(error));
}

// UPDATE
export function update(user: User) {
  createConnection(config)
    .then(async (connection) => {
      await connection.manager.save(user);
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
