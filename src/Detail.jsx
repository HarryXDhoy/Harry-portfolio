import { useParams } from "react-router-dom";
import itemList from "./items.json";

export default function Detail() {
  const id = useParams().id;
  const matchitem = itemList.find((Item) => Item.id == Number(id));
  console.log(matchitem);
  return (
    <dev>
      item:{matchitem.item}
          <div>Price:{matchitem.price}</div>
    </dev>
  );
}
