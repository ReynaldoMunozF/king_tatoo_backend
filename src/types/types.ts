export interface CreateUserRequestBody {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  birthday?: Date;
  password: string;
  active?: Number;
}

export interface CreateArtistRequestBody {
  nickname: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  active?: Number;
}

export interface CreateAppointmentsRequestBody {
  user_id: number;
  tattoo_artist_id: number;
  appointment_date: Date;
}

export interface LoginUserRequestBody {
  email: string;
  password: string;
}

export interface UserTokenData {
  user_id: string;
  name : string;
 
}
export interface ArtistTokenData {
  tattoo_artist_id: string;
  role: string;
 
}

