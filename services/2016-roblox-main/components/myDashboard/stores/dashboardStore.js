import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { multiGetPresence } from "../../../services/presence";
import dayjs from "dayjs";

const DashboardStore = createContainer(() => {
  const [friends, setFriends] = useState(null);
  const [friendStatus, setFriendStatus] = useState(null);

  useEffect(() => {
    if (!friends || !Array.isArray(friends) || friends.length === 0 || friendStatus) {
      return;
    }
    multiGetPresence({
      userIds: friends.map(v => v.id),
    }).then(d => {
      let obj = {};
      if (Array.isArray(d)) {
        for (const user of d) {
          if (user && user.userId) {
            obj[user.userId] = user;
          }
        }
      }
      setFriendStatus(obj);
      let sortedFriends = [...friends].sort((a, b) => {
        const lastOnlineA = obj[a.id]?.lastOnline;
        const lastOnlineB = obj[b.id]?.lastOnline;
        if (!lastOnlineA && !lastOnlineB) return 0;
        if (!lastOnlineA) return 1;
        if (!lastOnlineB) return -1;
        const onlineA = dayjs(lastOnlineA);
        const onlineB = dayjs(lastOnlineB);
        return onlineA.isAfter(onlineB) ? -1 : onlineA.isSame(onlineB) ? 0 : 1;
      });
      setFriends(sortedFriends);
    }).catch(e => {
      console.error('[error] friends err', e);
      setFriendStatus({});
    });
  }, [friends, friendStatus]);

  return {
    friends,
    setFriends,

    friendStatus,
    setFriendStatus,
  }
});

export default DashboardStore;