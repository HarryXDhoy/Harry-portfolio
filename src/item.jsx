import { Link } from "react-router-dom";
import items from "./items.json"
export default function MyItem() {

  console.log(items)

  // const itemVSid = {
  //   1: "item1",
  //   2: "item2",
  //   3: "item3",
  //   4: "item4",
  // };
  const page = items.map((ITEM) => (
    
      <Link to={`/item/${ITEM.id}`}>{ITEM.item}</Link>
    
  )); //returns array of keys in itemVSid and loop through each item and

  return page;
}
