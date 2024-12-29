function error (statusCode, message) {
  return function (req, res, next) {
    res.status(statusCode).render(`${statusCode}`, { docTitle: `${message}`, path: "/404" })
  }
}


export default { error }