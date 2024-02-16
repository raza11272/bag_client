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
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      playgroundAlways: false,
 
    },
  },
});
