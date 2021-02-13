const Results = require('./results').Results
const makeParser = require('./makeParser')
const ua = require('./ua')
const os = require('./os')
const device = require('./device')

module.exports = function parser (regexes) {
  const parseUA = makeParser(regexes.user_agent_parsers, ua.makeParser, ua.makeDefault)
  const parseEngine = makeParser(regexes.engine_parsers, ua.makeParser, ua.makeDefault)
  const parseOS = makeParser(regexes.os_parsers, os.makeParser, os.makeDefault)
  const parseDevice = makeParser(regexes.device_parsers, device.makeParser, device.makeDefault)

  function parse (str) {
    const ua = parseUA(str)
    const engine = parseEngine(str)
    const os = parseOS(str)
    const device = parseDevice(str)
    return new Results(str, ua, os, device, engine)
  }

  return {
    parse: parse,
    parseUA: parseUA,
    parseOS: parseOS,
    parseDevice: parseDevice,
    parseEngine: parseEngine
  }
}
