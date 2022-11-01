const domainName = (url) => {
  // remove http(s)://
  url = url.replace(/(https?:\/\/)/, "");

  // remove www.
  url = url.replace(/(www\.)/, "");

  // remove everything after the first /
  url = url.replace(/(\/.*)/, "");

  return url.split('.')[0];
};
