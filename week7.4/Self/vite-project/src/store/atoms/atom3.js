export const countThing= atom({
    key:"countThing",
    default:0
});
// essentially this is an atom, with default valu eof 0 and a key called "countThing".
// this can be used only in components that are wrapped around RecoilRoot, but in addition to that, they also need to 