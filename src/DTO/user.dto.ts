export interface UserDTO {
    username: string,
    email: string,
    password: string
}

export type UserLoginEmailDTO = Omit<UserDTO, 'username'>;

export type UserLoginUsernameDTO = Omit<UserDTO, 'email'>;