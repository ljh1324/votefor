const request = {
  post: (url, body) =>
    fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }),

  get: url => fetch(url)
};

export default request;
