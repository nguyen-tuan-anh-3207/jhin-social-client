import { Navigator, NavigatorParams } from 'Models'

export const createNav = (data: Navigator) => {
  const { name, nav } = data

  const resources: any = {}
  const routes: any = {}
  let navResult: any = []
  let menuResult: any = []

  nav.forEach((nav: NavigatorParams) => {
    let menuChildren: any[] = []

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
      navResult.push({
        name: name,
        key: `${name}-${nav.menuName}`,
        path: nav.path,
        component: nav.component,
        isMenu: nav.isMenu,
        isProtected: nav.isProtected
      })
    }

    if (nav.isMenu) {
      const menu: any = {
        icon: nav.icon,
        path: nav.path,
        name: nav?.menuName ?? name
      }
      if (menuChildren.length > 0) {
        menu.routes = menuChildren
      }
      menuResult.push(menu)
    }
  })

  return {
    [`${name}Nav`]: navResult,
    [`${name}Routes`]: routes,
    [`${name}Menu`]: menuResult
  }
}
