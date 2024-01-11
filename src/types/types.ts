export interface CreateUserRequestBody {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    phone_number?: string;
}