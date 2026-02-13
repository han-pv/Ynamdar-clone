export type UserDataT = {
    phone: string;
    fullname: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export type UserLoginDataT = {
  phone:string;
  email:string;
  password:string;
  token?:string;
}