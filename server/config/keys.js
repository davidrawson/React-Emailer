if (process.env.NODE_ENV === "production") {
  // in production
  module.exports = require("./prod");
} else {
  // in DEV
  module.exports = require("./dev");
}

// module.exports = {
//   googleClientID: '514408957606-7o5e82ejfec9kga7o7c7871c68qdqlp9.apps.googleusercontent.com',
//   googleClientSecret: 'O_4LstW-EGkqEBdvHm0a6f_k',
//   mongoURI: 'mongodb+srv://davidrawson:bu5yunkn0wn@emaily.n5slt.mongodb.net/emaily?retryWrites=true&w=majority',
//   cookieKey: 'gr478wsjsdfsdfsegghgh'
// }

// Sendgrid api key
// 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
