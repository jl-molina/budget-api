import { UserLoginEmailDTO, UserLoginUsernameDTO } from "../DTO/user.dto";
import bcrypt from "bcrypt";
import sql from "../database"

async function loginEmail(user: UserLoginEmailDTO) {
    const query = await sql.query('select password from users where email = $1', [user.email]);
    if (!query.rowCount) {
        return false;
    }
    return bcrypt.compare(user.password, query.rows[0].password);
}

async function loginUsername(user: UserLoginUsernameDTO) {
    const query = await sql.query('select password from users where username = $1', [user.username]);
    if (!query.rowCount) {
        return false;
    }
    return bcrypt.compare(user.password, query.rows[0].password);
}

export {
    loginEmail,
    loginUsername
}