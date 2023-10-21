import Routes from './routes.js'
const routes = new Routes()

routes.add('/', '/pages/home.html')
routes.add('/o-universo', '/pages/o-universo.html')
routes.add('/exploracao', '/pages/exploracao.html')

routes.handle()

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', routes.route.bind(routes))
})

window.addEventListener('popstate', routes.handle.bind(routes))
