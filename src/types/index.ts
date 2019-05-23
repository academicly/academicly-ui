type Nullable<T> = T | null;

export interface User {
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  avatar?: Nullable<string>;
}

export interface ErrorMessage {
  type?: Nullable<string>;
  code?: Nullable<string>;
  message: Nullable<string>;
}

export interface AuthAction {
  type: 'AUTH_SUCCESS' | 'AUTH_FAILURE';
}
