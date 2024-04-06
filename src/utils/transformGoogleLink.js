const transformGoogleLink = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  const imageId = urlParams.get("https://drive.google.com/uc?id");
  return `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
};

export default transformGoogleLink;
