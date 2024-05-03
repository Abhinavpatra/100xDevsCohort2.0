import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { networkAtom, notificationAtom, jobsAtom, messagingAtom, totalNotificationSelector } from './store/atoms/atom';
import './App.css';

function AppBar() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationAtomCount=useRecoilValue(notificationAtom);
  const totalNotificationCount= useRecoilValue(totalNotificationSelector)
  return    <>
  <button>HOME</button>
  <button>My network({(networkNotificationCount < 100) ? networkNotificationCount : "99+"})</button>
  <button>jobs{(jobsCount < 100) ? jobsCount : "99+"}</button>
  <button>Messaging({messagingCount < 100 ? messagingCount : "99+"})</button>
  <button>Notifications({notificationAtomCount})</button>
  <button >Me</button>
   <span>Total remarks:{totalNotificationCount} </span>
</>
}

export default AppBar;
 