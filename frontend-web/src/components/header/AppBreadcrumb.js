import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = (props) => {
  const currentLocation = useLocation().pathname

  /**
   * SEARCH FOR ROUTE
   * If routes exists return the current route else false
   */
  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  /**
   * BREADCRUMB GENERATION
   * Get the location
   * Split it based on the JSON format in routes
   * Create a current path name
   * Check whether the current path is valid or not using getRouteName
   * if valid populate breadcrumbs array
   * return currentPathname and breadcrumbs array
   */
  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      {/* <CBreadcrumbItem href="/">Home</CBreadcrumbItem> */}
      {/* <CBreadcrumbItem className="text-muted">{props.actorType}</CBreadcrumbItem> */}
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
