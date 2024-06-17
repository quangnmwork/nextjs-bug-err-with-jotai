import { useAtomValue } from "jotai";
import { dummyAtom } from "./jotai";

export default function Home() {
  const dummyValue = useAtomValue(dummyAtom);
  return <>Value: {dummyValue}</>;
}
