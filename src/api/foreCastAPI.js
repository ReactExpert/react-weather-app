class ForeCastAPI {
  constructor(apiSecret) {
    this.secret = apiSecret;
    this.endpoint = (latitude, longitude) => `https://weather-api-nodejs.herokuapp.com/api?latitude=${latitude}&longitude=${longitude}`;
    this.data = null;
  }

  async fetch(latitude, longitude) {
    try {
      const response = await fetch(this.endpoint(latitude, longitude));
      this.data = await response.json();
    } catch (error) {
      throw new Error(`ForeCastAPI unable to fetch: ${error.message}`);
    }
  }
}

export default ForeCastAPI;
