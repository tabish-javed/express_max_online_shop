function error (statusCode, message) {
  return function (req, res, next) {
    res.status(statusCode).render(`${statusCode}`, { docTitle: `${message}` })
  }
}


export default { error }