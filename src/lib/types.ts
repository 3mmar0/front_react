export interface UserData {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  phone?: string;
  country?: string;
}

export interface DataLinks {
  link?: string;
  ttl?: string;
  icon?: JSX.Element;
}
