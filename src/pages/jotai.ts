import { atomWithStorage, createJSONStorage } from "jotai/utils";

const dummyKey = "dummyId";

const storage = createJSONStorage<string>(() => sessionStorage);

/** @public */
export const dummyAtom = atomWithStorage<string>(dummyKey, "hi", storage, {
  getOnInit: true,
});
