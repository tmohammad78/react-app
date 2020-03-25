const c = {};
c.getCurrentDevice = function getCurrentDevice(ua) {
  return /mobile/i.test(ua) ? 'mobile' : 'desktop';
};

c.isDesktop = function isDesktop(ua) {
  return !/mobile/i.test(ua);
};

c.isMobile = function isMobile(ua) {
  return /mobile/i.test(ua);
};
c.isBot = function isBot(ua) {
  const b = /curl|bot|googlebot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex|crawler|spider|robot|crawling/i;
  return b.test(ua);
};
module.exports = c;
