declare module 'Models' {
  export interface Navigator {
    menuName?: string
    name: string
    nav: NavigatorParams[]
  }

  export interface NavigatorParams {
    key?: string
    path?: string
    component?: any
    isMenu: boolean
    isProtected: boolean
    icon?: any
    menuName?: string
    children?: Navigator[]
    isAuth?: boolean
  }
}
