export default ({ server, req, route }) => {
  if (!server) {
    if (route.path == '/200.html' && route.query.previewUrl) {
      route.path = route.query.previewUrl
    }
  }
}