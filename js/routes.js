export default class Routes {
  routes = {}

  add(pageName, page) {
    this.routes[pageName] = page
  }

  route(event) {
    event.preventDefault()
    window.history.pushState({}, '', event.currentTarget.href)
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('.main-content').innerHTML = html
      })
  }
}
