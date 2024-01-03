
export interface ILoginParams {
  phone: string | number
  password: string
  code?: string | number
} 

export interface IResgiterParams extends ILoginParams {
  nickName?: string
  newPassword?: string
}