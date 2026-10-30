import NextLink from 'next/link';

const Link = props => {
  const { href, children, ...rest } = props;
  if (!href || href === '#' || typeof href !== 'string' || href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a href={href || '#'} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} prefetch={false} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;