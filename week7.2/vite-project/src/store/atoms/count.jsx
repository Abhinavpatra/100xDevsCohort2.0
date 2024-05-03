import { atom, selector } from "recoil";

const countAtom = atom({
    key: "countAtom",
    default: 0
});

const evenSelector = selector({
    key: "evenSelector",
    get: (props) => {

        const count = props.get(countAtom);
        return <>
        true
        </>
    },
});
export { countAtom, evenSelector }