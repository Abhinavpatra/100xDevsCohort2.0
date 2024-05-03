import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 12
});

export const notificationAtom = atom({
  key: "notificationAtom", // Corrected from `networkAtom`
  default: 12
});

export const totalNotificationSelector=selector({
  key:"totalNotificationSelector",
 
  get:(props)=>{
    const total=props.get(networkAtom)+props.get(jobsAtom)+props.get(messagingAtom)+props.get(notificationAtom);
    return total;
  }
})