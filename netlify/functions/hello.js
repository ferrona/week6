// defines a lambda function
exports.handler = async function(event) {

  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    body: `Tacos tacos tacos!` // a string of data
  }
}