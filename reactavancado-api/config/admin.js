module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0a960d71584b66664cd51629a7cc242c'),
  },
});
