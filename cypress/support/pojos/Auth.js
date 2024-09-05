class Auth {
  constructor(clientId, clientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  getAuthOptions() {
    return {
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
      headers: {
        'authorization': `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'scope=oob&grant_type=client_credentials',
    };
  }
}

export default Auth;

  