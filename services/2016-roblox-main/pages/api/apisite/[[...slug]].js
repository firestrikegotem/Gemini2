const gamesData = [
  {
    id: 1818,
    name: "Work at a Pizza Place",
    placeId: 1818,
    universeId: 1818,
    creatorName: "Dued1",
    creatorId: 1,
    creatorType: "User",
    totalUpVotes: 124500,
    totalDownVotes: 4200,
    playerCount: 18450,
    price: 0,
    imageToken: "pizza_thumb",
  },
  {
    id: 189707,
    name: "Natural Disaster Survival",
    placeId: 189707,
    universeId: 189707,
    creatorName: "Stickmasterluke",
    creatorId: 2,
    creatorType: "User",
    totalUpVotes: 98400,
    totalDownVotes: 3100,
    playerCount: 14200,
    price: 0,
    imageToken: "disaster_thumb",
  },
  {
    id: 69184822,
    name: "Theme Park Tycoon 2",
    placeId: 69184822,
    universeId: 69184822,
    creatorName: "Den_S",
    creatorId: 3,
    creatorType: "User",
    totalUpVotes: 87300,
    totalDownVotes: 2500,
    playerCount: 9320,
    price: 0,
    imageToken: "tycoon_thumb",
  },
  {
    id: 183364845,
    name: "Speed Run 4",
    placeId: 183364845,
    universeId: 183364845,
    creatorName: "Vurse",
    creatorId: 4,
    creatorType: "User",
    totalUpVotes: 65200,
    totalDownVotes: 4100,
    playerCount: 7800,
    price: 0,
    imageToken: "speedrun_thumb",
  },
  {
    id: 13822889,
    name: "Lumber Tycoon 2",
    placeId: 13822889,
    universeId: 13822889,
    creatorName: "Defaultio",
    creatorId: 5,
    creatorType: "User",
    totalUpVotes: 112000,
    totalDownVotes: 5200,
    playerCount: 11400,
    price: 0,
    imageToken: "lumber_thumb",
  },
  {
    id: 292439477,
    name: "Phantom Forces",
    placeId: 292439477,
    universeId: 292439477,
    creatorName: "StyLiS Studios",
    creatorId: 6,
    creatorType: "Group",
    totalUpVotes: 145000,
    totalDownVotes: 8300,
    playerCount: 16200,
    price: 0,
    imageToken: "pf_thumb",
  },
  {
    id: 142823291,
    name: "Murder Mystery 2",
    placeId: 142823291,
    universeId: 142823291,
    creatorName: "Nikilis",
    creatorId: 7,
    creatorType: "User",
    totalUpVotes: 132000,
    totalDownVotes: 6100,
    playerCount: 21000,
    price: 0,
    imageToken: "mm2_thumb",
  },
  {
    id: 155615604,
    name: "Prison Life v2.0",
    placeId: 155615604,
    universeId: 155615604,
    creatorName: "Aesthetical",
    creatorId: 8,
    creatorType: "User",
    totalUpVotes: 91000,
    totalDownVotes: 7400,
    playerCount: 12500,
    price: 0,
    imageToken: "prison_thumb",
  }
];

const catalogItems = [
  {
    id: 1031429,
    name: "Classic ROBLOX Fedora",
    description: "The classic 2016 fedora for distinguished ROBLOXians.",
    price: 500,
    priceStatus: "Available",
    genres: ["All"],
    itemType: "Asset",
    assetType: 8,
    creatorName: "ROBLOX",
    creatorTargetId: 1,
    creatorType: "User",
    favoriteCount: 42000,
    unitsAvailableForConsumption: null,
    lowestPrice: 500,
  },
  {
    id: 1031430,
    name: "Clockwork's Shades",
    description: "Classic shades from the golden age.",
    price: 15000,
    priceStatus: "Available",
    genres: ["All"],
    itemType: "Asset",
    assetType: 8,
    creatorName: "ROBLOX",
    creatorTargetId: 1,
    creatorType: "User",
    favoriteCount: 78000,
    unitsAvailableForConsumption: 120,
    lowestPrice: 15000,
  },
  {
    id: 1031431,
    name: "Sparkle Time Fedora",
    description: "Sparkling style from 2016.",
    price: 45000,
    priceStatus: "Available",
    genres: ["All"],
    itemType: "Asset",
    assetType: 8,
    creatorName: "ROBLOX",
    creatorTargetId: 1,
    creatorType: "User",
    favoriteCount: 152000,
    unitsAvailableForConsumption: 35,
    lowestPrice: 45000,
  },
  {
    id: 1031432,
    name: "Valkyrie Helm",
    description: "Ancient power bestowed upon the worthy.",
    price: 50000,
    priceStatus: "Available",
    genres: ["Adventure"],
    itemType: "Asset",
    assetType: 8,
    creatorName: "ROBLOX",
    creatorTargetId: 1,
    creatorType: "User",
    favoriteCount: 210000,
    unitsAvailableForConsumption: 15,
    lowestPrice: 50000,
  },
  {
    id: 1031433,
    name: "Classic Swordpack",
    description: "Dual swords strapped to your back ready for battle.",
    price: 150,
    priceStatus: "Available",
    genres: ["Adventure"],
    itemType: "Asset",
    assetType: 8,
    creatorName: "ROBLOX",
    creatorTargetId: 1,
    creatorType: "User",
    favoriteCount: 33000,
    unitsAvailableForConsumption: null,
    lowestPrice: 150,
  },
  {
    id: 1031434,
    name: "Red Baseball Cap",
    description: "A staple in every classic wardrobe.",
    price: 25,
    priceStatus: "Available",
    genres: ["All"],
    itemType: "Asset",
    assetType: 8,
    creatorName: "ROBLOX",
    creatorTargetId: 1,
    creatorType: "User",
    favoriteCount: 19000,
    unitsAvailableForConsumption: null,
    lowestPrice: 25,
  }
];

export default function handler(req, res) {
  const { slug } = req.query;
  const path = Array.isArray(slug) ? slug.join('/') : '';
  const url = req.url || '';

  res.setHeader('Content-Type', 'application/json');

  // Authentication endpoints
  if (path.includes('auth/v2/login') || path.includes('authentication/v2/login')) {
    const user = { id: 1, name: 'ROBLOX' };
    res.setHeader('Set-Cookie', 'roblox_session=1; Path=/; HttpOnly');
    return res.status(200).json({ twoStepVerificationData: null, user });
  }

  if (path.includes('auth/v2/logout')) {
    res.setHeader('Set-Cookie', 'roblox_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
    return res.status(200).json({ success: true });
  }

  // Users authenticated
  if (path.includes('users/authenticated')) {
    return res.status(200).json({
      id: 1,
      name: "ROBLOX",
      displayName: "ROBLOX",
    });
  }

  // User info
  if (path.startsWith('users/v1/users/') && !path.includes('status') && !path.includes('username-history')) {
    const parts = path.split('/');
    const id = parseInt(parts[3], 10) || 1;
    return res.status(200).json({
      id,
      name: id === 1 ? "ROBLOX" : `Player_${id}`,
      displayName: id === 1 ? "ROBLOX" : `Player_${id}`,
      description: "Welcome to ROBLOX 2016 Revival! Exploring classic builds and games.",
      created: "2006-02-27T00:00:00Z",
      isBanned: false,
      externalAppDisplayName: null,
    });
  }

  // User status
  if (path.includes('/status')) {
    return res.status(200).json({
      status: "Reliving the 2016 ROBLOX era!",
    });
  }

  // User currency / economy
  if (path.includes('/currency')) {
    return res.status(200).json({
      robux: 15420,
      tickets: 4250,
    });
  }

  // Membership
  if (path.includes('validate-membership')) {
    return res.status(200).json(4); // Outrageous Builders Club
  }

  // Counts (friends, messages, trades)
  if (path.includes('friend') && path.includes('count')) {
    return res.status(200).json({ count: 5 });
  }
  if (path.includes('messages') && path.includes('count')) {
    return res.status(200).json({ count: 2 });
  }
  if (path.includes('trades') && path.includes('count')) {
    return res.status(200).json({ count: 1 });
  }

  // Presence
  if (path.includes('presence')) {
    const userIds = req.body && Array.isArray(req.body.userIds) ? req.body.userIds : [1, 2, 3, 4];
    return res.status(200).json({
      userPresences: userIds.map(uid => ({
        userPresenceType: 1,
        lastLocation: "Website",
        placeId: null,
        gameId: null,
        userId: uid,
        lastOnline: new Date().toISOString(),
      })),
    });
  }

  // Chat
  if (path.includes('chat-settings')) {
    return res.status(200).json({
      chatEnabled: false,
      isActiveChatUser: false,
    });
  }

  // Alerts
  if (path.includes('alerts/alert-info')) {
    return res.status(200).json({
      IsVisible: true,
      Text: "Welcome to ROBLOX 2016 Revival! Classic catalog, games, and trades are active.",
      LinkUrl: "/games",
      CreatedAt: Date.now(),
    });
  }

  // Games sorts
  if (path.includes('games/sorts')) {
    return res.status(200).json({
      sorts: [
        { token: "Popular", name: "Popular", displayName: "Popular" },
        { token: "TopGrossing", name: "Top Grossing", displayName: "Top Grossing" },
        { token: "Featured", name: "Featured", displayName: "Featured" },
      ],
      gameSortStyle: "Grid",
    });
  }

  // Games list
  if (path.includes('games/list')) {
    return res.status(200).json({
      games: gamesData,
      suggestedKeyword: "",
      correctedKeyword: "",
      filteredKeyword: "",
    });
  }

  // User games
  if (path.includes('games') && path.includes('users')) {
    return res.status(200).json({
      data: gamesData.slice(0, 3),
      nextPageCursor: null,
      previousPageCursor: null,
    });
  }

  // Catalog search
  if (path.includes('search/items') || path.includes('catalog/v1')) {
    return res.status(200).json({
      keyword: null,
      previousPageCursor: null,
      nextPageCursor: null,
      data: catalogItems,
      totalResultCount: catalogItems.length,
    });
  }

  // Thumbnails
  if (path.includes('thumbnails') || path.includes('avatar')) {
    const ids = req.query.userIds ? req.query.userIds.split(',') : [1];
    return res.status(200).json({
      data: ids.map((id) => ({
        targetId: parseInt(id, 10) || 1,
        state: "Completed",
        imageUrl: "/img/placeholder.png",
      })),
    });
  }

  // Friends list
  if (path.includes('friends')) {
    return res.status(200).json({
      data: [
        { id: 2, name: "Builderman", isOnline: true },
        { id: 3, name: "Shedletsky", isOnline: false },
        { id: 4, name: "Stickmasterluke", isOnline: true },
      ],
    });
  }

  // Default fallback for any unhandled GET/POST
  return res.status(200).json({
    data: [],
    success: true,
  });
}
