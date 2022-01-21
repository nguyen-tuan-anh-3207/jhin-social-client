import Cookies from 'js-cookie'

export const getCookie = (name: string) => {
  return name ? Cookies.get(name) : null
}

export const setCookie = ({
  name,
  value,
  expires = 7
}: {
  name: string
  value: any
  expires: any
}) => {
  Cookies.set(name, value, { expires: expires })
}

export const removeCookie = (name: string) => Cookies.remove(name)
