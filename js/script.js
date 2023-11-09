import Router from './router.js'
const router = new Router()

router.add('/', '/pages/home.html')
router.add('/o-universo', '/pages/o-universo.html')
router.add('/exploracao', '/pages/exploracao.html')

router.handle()

window.addEventListener('popstate', router.handle.bind(router))
window.onload = () => {
  const links = document.querySelectorAll('a')

  links.forEach(link => {
    link.addEventListener('click', router.route.bind(router))
  })

  console.log(links)
}
