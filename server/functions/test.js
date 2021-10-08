const test = (req, res, next) => {
  req.logger = Date.now()
  next()
}

export default test
