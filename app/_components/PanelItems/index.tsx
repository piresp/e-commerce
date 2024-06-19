import { selectClothes } from "@/redux/sliceClothes";
import { useSelector } from "react-redux";
import CardItem from "../CardItem";

const PanelItems = () => {
  const { items, itemsFiltered } = useSelector(selectClothes);

  const rows = [];
  let iterationItens;
  
  itemsFiltered.length > 0
    ? (iterationItens = itemsFiltered)
    : (iterationItens = items);
  for (let i = 0; i < iterationItens.length; i += 3)
    rows.push(iterationItens.slice(i, i + 3));

  return (
    <div className="my-3">
      {rows.map((row, rowIndex) => (
        <div className="flex justify-center" key={rowIndex}>
          {row.map((item) => (
            <div className="p-2" key={item.id}>
              <CardItem
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                img={item.img}
                id={item.id}
                key={item.id}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PanelItems;
