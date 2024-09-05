class Tokenization {
  constructor(cardNumber, cardHolderName, expirationMonth, expirationYear, securityCode) {
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.expirationMonth = expirationMonth;
    this.expirationYear = expirationYear;
    this.securityCode = securityCode;
  }

  getTokenizationOptions(authToken) {
    return {
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/v1/tokens/card',
      headers: {
        Authorization: `Bearer ${authToken}`,  
        'Content-Type': 'application/json; charset=utf-8', 
      },
      body: JSON.stringify({
        card_number: this.cardNumber,
        card_holder_name: this.cardHolderName,
        expiration_month: this.expirationMonth,
        expiration_year: this.expirationYear,
        security_code: this.securityCode,
      })
    };
  }
}

export default Tokenization;

  