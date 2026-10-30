import React from 'react';

const feedItems = [
  {
    feedId: 1,
    user: { id: 2, name: 'Builderman' },
    content: 'Welcome to Roblox 2016 Revival! Classic servers and games are back online.',
    created: 'Oct 29, 2026 12:00 PM',
  },
  {
    feedId: 2,
    user: { id: 3, name: 'Shedletsky' },
    content: 'Fried chicken and sword fights in SFOTH IV!',
    created: 'Oct 29, 2026 11:30 AM',
  },
  {
    feedId: 3,
    user: { id: 4, name: 'Stickmasterluke' },
    content: 'New updates deployed to Natural Disaster Survival!',
    created: 'Oct 29, 2026 10:15 AM',
  },
];

export default function GetUserFeedPage() {
  return (
    <>
      <base target="_parent" />
      <ul className="vlist feeds" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {feedItems.map(item => (
          <li
            key={item.feedId}
            className="list-item"
            style={{
              display: 'flex',
              padding: '10px 0',
              borderBottom: '1px solid #c3c3c3',
              alignItems: 'flex-start',
            }}
          >
            <a href={`/users/${item.user.id}/profile`} style={{ marginRight: '12px' }}>
              <img
                src="/img/placeholder.png"
                alt={`${item.user.name}'s Avatar`}
                style={{ width: '50px', height: '50px', borderRadius: '4px' }}
              />
            </a>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                <a href={`/users/${item.user.id}/profile`} style={{ color: '#0055b3', textDecoration: 'none' }}>
                  {item.user.name}
                </a>
              </p>
              <p style={{ margin: '4px 0', color: '#333' }}>&quot;{item.content}&quot;</p>
              <span style={{ fontSize: '12px', color: '#777' }}>{item.created}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
