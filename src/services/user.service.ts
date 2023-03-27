import { UserDTO } from "../DTO/user.dto";
import bcrypt from "bcrypt";
import sql from "../database"

async function createUser(user: UserDTO) {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(user.password, saltRounds);
    await sql.query('insert into users (username, email, password) values ($1, $2, $3)', [user.username, user.email, passwordHash]);
}

async function getAllUsers() {
    const users = await sql.query('select * from users');
    return users.rows;
}

export {
    createUser,
    getAllUsers
}
