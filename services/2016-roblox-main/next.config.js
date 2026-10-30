const fs = require('fs');
const path = require('path');
const configPath = path.join(__dirname, path.sep + 'config.json');
let config = {
  serverRuntimeConfig: { backend: {} },
  publicRuntimeConfig: {
    backend: {
      proxyEnabled: true,
      flags: {
        myAccountPage2016Enabled: true,
        catalogGenreFilterSupported: true,
        catalogPageLimit: 28,
        catalogSaleCountVisibleFromDetailsEndpoint: true,
        catalogDetailsPageResellerLimit: 10,
        avatarPageInventoryLimit: 10,
        friendsPageLimit: 25,
        settingsPageThemeSelectorEnabled: true,
        tradeWindowInventoryCollectibleLimit: 10,
        moneyPagePromotionTabVisible: true,
        gameGenreFilterMethod: 'keyword',
        gameGenreFilterSupported: true,
        avatarPageOutfitCreatedAtAvailable: true,
        catalogDetailsPageOwnersTabEnabled: true,
      },
      baseUrl: '',
      apiFormat: '/apisite/{0}{1}',
    },
  },
};
if (fs.existsSync(configPath)) {
  try {
    config = JSON.parse(fs.readFileSync(configPath).toString('utf-8'));
  } catch (e) {
    console.warn('Failed to parse config.json, using defaults', e);
  }
}

module.exports = {
  reactStrictMode: false,
  output: 'standalone',
  serverRuntimeConfig: config.serverRuntimeConfig,
  publicRuntimeConfig: config.publicRuntimeConfig,
  
  async rewrites() {
    return [
      {
        source: '/apisite/:path*',
        destination: '/api/apisite/:path*',
      },
      {
        source: '/user-sponsorship/:path*',
        destination: '/api/user-sponsorship/:path*',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/catalog.aspx',
        destination: '/catalog',
        permanent: true,
      },
      {
        source: '/groups/:id/:name',
        destination: '/My/Groups.aspx?gid=:id',
        permanent: false,
      },
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config
  },
}