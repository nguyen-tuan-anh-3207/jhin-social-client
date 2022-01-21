import { Navigator, NavigatorParams } from 'Models'

export const createNav = (data: Navigator) => {
  const { name, nav } = data

  const resources: any = {}
  const routes: any = {}
  let navResult: any = []
  let menuResult: any = []

  nav.forEach((nav: NavigatorParams) => {
    let menuChildren: any[] = []

    const resourceNav = `${name}`.toLowerCase()

    resources[resourceNav] = resourceNav

    if ((nav.children?.length ?? 0) > 0) {
      nav.children?.forEach((child: Navigator) => {
        const childrenNav = createNav(child)

        navResult.push(...childrenNav[`${child.name}Nav`])
        Object.assign(resources, childrenNav[`${child.name}Resources`])
        Object.assign(routes, childrenNav[`${child.name}Routes`])
        menuChildren.push(...childrenNav[`${child.name}Menu`])
      })
    }

    if (nav.path) {
      routes[resourceNav] = nav.path

      navResult.push({
        name: name,
        key: `${name}`,
        resource: resourceNav,
        path: nav.path,
        component: nav.component,
        isMenu: nav.isMenu,
        isProtected: nav.isProtected,
        isAuth: nav.isAuth
      })
    }

    if (nav.isMenu) {
      const menu: any = {
        icon: nav.icon,
        path: nav.path,
        name: nav?.menuName ?? name,
        resource: resourceNav,
        isAuth: nav.isAuth
      }
      if (menuChildren.length > 0) {
        menu.routes = menuChildren
      }
      menuResult.push(menu)
    }
  })

  return {
    [`${name}Resources`]: resources,
    [`${name}Nav`]: navResult,
    [`${name}Routes`]: routes,
    [`${name}Menu`]: menuResult
  }
}
