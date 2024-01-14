export interface CreateUserRequestBody {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active?: Number;
}

export interface CreateArtistRequestBody {
  nickname: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active?: Number;
}

export interface LoginUserRequestBody {
  email: string;
  password: string;
}

export interface TokenData {
  userId: string;
  userRoles: string[];
}

