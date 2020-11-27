// config/webenv.js
const path = require('path')
const DotEnv = require('dotenv')

module.exports = function (dev) {
  const envPath = path.resolve(__dirname, '.env')
  const dotenv = DotEnv.config({ path: envPath }).parsed
  console.log('dotenv')
  console.log(dotenv)

  var publicPath = process.env.PUBLIC_PATH
  if (!publicPath) {
    process.env.PUBLIC_PATH = publicPath = '/'
  }

  var serverUrl = process.env.SERVER_URL
  if (!serverUrl) {
    process.env.SERVER_URL = serverUrl = 'http://127.0.0.1:8000'
  }

  const url_object = new URL(serverUrl)
  const url_protocol = url_object.protocol
  const url_domain = url_object.hostname
  const url_port = url_object.port

  var graphqlUrl = process.env.GRAPHQL_URL
  if (!graphqlUrl) {
    process.env.GRAPHQL_URL = graphqlUrl = `${url_protocol}//${url_domain}:${url_port}/graphql/`
  }
  var subscriptionslUrl = process.env.SUBSCRIPTIONS_URL
  if (!subscriptionslUrl) {
    process.env.SUBSCRIPTIONS_URL = subscriptionslUrl = `ws://${url_domain}:${url_port}/graphql/`
  }
  // Need to stringify for webpack
  const env = Object.assign({}, process.env)
  // console.log(env)

  for (const key in env) {
    if (typeof env[key] === 'string') {
      env[key] = JSON.stringify(env[key])
    }
  }
  // console.log('env')
  // console.log(env)

  return env
}
