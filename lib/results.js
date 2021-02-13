exports.Results = Results
function Results (uaStr, ua, os, device, engine) {
  this.userAgent = uaStr
  this.ua = ua
  this.os = os
  this.device = device
  this.engine = engine
  delete ua.userAgent
  delete os.userAgent
  delete device.userAgent
  delete engine.userAgent
}
