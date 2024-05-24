const transformGoogleLink = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  let imageId = urlParams.get("https://drive.google.com/uc?id");
  if (imageId) {
    return `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
  } else {
    imageId = queryString.match(/\/file\/d\/([^\/]+)\//);
    return `https://drive.google.com/thumbnail?id=${imageId[1]}&sz=w1000`;
  }
};

export default transformGoogleLink;
