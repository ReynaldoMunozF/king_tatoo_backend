export interface CreateUserRequestBody {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number?: number;
    password: string;
}