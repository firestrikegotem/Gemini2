export default function handler(req, res) {
  const { type } = req.query;
  const adType = parseInt(type, 10) || 1;

  let img = '/img/058f09be8a19b8607d6fe50baa6659a1-AdBannerTemplate.png';
  let width = 728;
  let height = 90;
  let title = 'Catalog - Exclusive 2016 Fedora';
  let href = '/catalog/1031429/Classic-ROBLOX-Fedora';

  if (adType === 2) {
    img = '/img/b52c03d7260a8d693e6fc4e4fa16febd-AdSkyscraperTemplate.png';
    width = 160;
    height = 600;
    title = 'Play Work at a Pizza Place!';
    href = '/games/1818/Work-at-a-Pizza-Place';
  } else if (adType === 3) {
    img = '/img/fe2d40a3cec3899c9a91838ee2c16077-AdRectangleTemplate.png';
    width = 300;
    height = 250;
    title = 'Natural Disaster Survival';
    href = '/games/189707/Natural-Disaster-Survival';
  }

  const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Roblox.com</title>
    <style type="text/css">
      body { margin: 0; }
      body.banner { text-align: center; }
      a { color: gray; text-decoration: none; }
      a.ad { display: inline-block; }
      a.ad img { display: block; border: none; }
      a:hover { text-decoration: underline; }
    </style>
  </head>
  <body class="abp banner">
    <a class="ad" title="${title}" href="${href}" target="_top">
      <img src="${img}" alt="${title}" height="${height}" width="${width}" />
    </a>
  </body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(html);
}
