module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME','ds8sl0kcw'),
        api_key: env('CLOUDINARY_KEY','754934432122962'),
        api_secret: env('CLOUDINARY_SECRET','GGbYdxTnfNsrdPTrVoWkPmmbivU'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});

// module.exports = ({ env }) => ({
//   settings: {
//     parser: {
//       enabled: true,
//       multipart: true,
//     },
//     cors: {
//       enabled: true,
//       headers: "*",
//       methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
//     },
//   },
// });

module.exports = {
  //
  graphql: {
 enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
