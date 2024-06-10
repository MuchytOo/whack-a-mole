// middleware/redirect.js
export default function ({ route, redirect }) {
  if (route.path !== '/' && route.path !== '/game') {
    redirect('/')
  }
}
