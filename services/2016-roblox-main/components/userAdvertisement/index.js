import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import request, { getBaseUrl } from "../../lib/request";
import { adTypes } from "./constants";
import Link from "../link";

const useStyles = createUseStyles({
  adWrapper: {
    margin: '0 auto',
    textAlign: 'center',
  },
  adImage: {
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    display: 'block',
    '@media(max-width: 800px)': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
});

/**
 * User advertisement iframe
 * @param {{type: number}} props 
 */
const UserAdvertisement = props => {
  const info = adTypes[props.type] || { width: 728, height: 90 };
  const [imageUrl, setImageUrl] = useState(null);
  const [link, setLink] = useState(null);
  const [title, setTitle] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const s = useStyles();

  useEffect(() => {
    let isMounted = true;
    const defaultImg =
      props.type === 2
        ? '/img/b52c03d7260a8d693e6fc4e4fa16febd-AdSkyscraperTemplate.png'
        : props.type === 3
        ? '/img/fe2d40a3cec3899c9a91838ee2c16077-AdRectangleTemplate.png'
        : '/img/058f09be8a19b8607d6fe50baa6659a1-AdBannerTemplate.png';
    const defaultLink = props.type === 2 ? '/games/1818/Work-at-a-Pizza-Place' : '/catalog/1031429/Classic-ROBLOX-Fedora';
    const defaultTitle = 'Classic ROBLOX';

    request('GET', `/user-sponsorship/${props.type}`)
      .then(adData => {
        if (!isMounted) return;
        const doc = new DOMParser().parseFromString(adData.data, 'text/html');
        const imageElements = doc.getElementsByTagName('img');
        const aTags = doc.getElementsByTagName('a');
        if (imageElements.length && aTags.length) {
          const imgUrl = imageElements[0].getAttribute('src') || defaultImg;
          const href = aTags[0].getAttribute('href') || defaultLink;
          const adTitle = aTags[0].getAttribute('title') || defaultTitle;
          setImageUrl(imgUrl);
          setTitle(adTitle);
          setLink(href);
        } else {
          setImageUrl(defaultImg);
          setTitle(defaultTitle);
          setLink(defaultLink);
        }
      })
      .catch(() => {
        if (!isMounted) return;
        setImageUrl(defaultImg);
        setTitle(defaultTitle);
        setLink(defaultLink);
      });

    return () => {
      isMounted = false;
    };
  }, [props.type]);

  if (!imageUrl || !link) {
    return <div style={{ width: '100%', height: info.height }} />;
  }

  return (
    <div className={s.adWrapper} style={imageLoaded ? undefined : { height: info.height, width: '100%' }}>
      <Link href={link}>
        <a title={title}>
          <img
            onLoad={() => {
              setImageLoaded(true);
            }}
            src={imageUrl}
            className={s.adImage}
            style={{ maxWidth: info.width, maxHeight: info.height }}
            alt={title || 'Advertisement'}
          />
        </a>
      </Link>
    </div>
  );
};

export default UserAdvertisement;