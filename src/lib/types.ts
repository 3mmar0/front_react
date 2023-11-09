export interface UserData {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  phone?: string;
  country?: string;
  token?: string;
  otp?: string;
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

export interface CategoryType {
  id?: string;
  parent_id?: string;
  name?: string;
  slug?: string;
  disc?: string;
  image?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  parent?: CategoryType;
}

export interface ProductType {
  id?: string;
  store_id?: string;
  category_id?: string;
  store?: string;
  category?: string;
  name?: string;
  slug?: string;
  disc?: string;
  tags?: string | { name: string }[];
  price?: string;
  compare_price?: string;
  options?: string;
  rating?: string;
  image?: string;
  type?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
  // parent?: CategoryType;
}

export interface CaruselType {
  id?: string;
  image?: string;
}
export interface HomeType {
  carusels?: CaruselType[];
  categories?: CategoryType[];
  newProd?: ProductType[];
  topProd?: ProductType[];
  hotProd?: ProductType[];
  bestSellingProd?: ProductType[];
}

export interface Slice<T> {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  user?: T | null;
  errors: T | null;
  data: T | T[] | null;
}

export interface PaginationType {
  first_page_url?: string;
  prev_page_url?: string;
  links?:
    | undefined
    | {
        url?: string;
        active?: string;
        label?: string;
      }[];
  next_page_url?: string;
  last_page_url?: string;
}

export type Filter = {
  price?: string;
  category_id?: string;
  rating?: string;
};
