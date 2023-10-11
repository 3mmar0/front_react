export interface UserData {
  id?: number;
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

export interface StoreType {
  id?: number;
  name?: string;
  slug?: string;
  disc?: string;
  logo?: string;
  cover?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}
