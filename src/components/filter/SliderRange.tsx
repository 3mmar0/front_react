import { Filter } from "@/lib/types";
import { FC, useRef } from "react";

interface SliderRangeProps {
  filter?: Filter;
  handleFilter: (data: Filter) => Filter;
}

const SliderRange: FC<SliderRangeProps> = ({ filter, handleFilter }) => {
  const valRef = useRef(null);

  function handleInputChange(e) {
    // e.preventDefault();
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;
    const percentage = ((val - min) * 100) / (max - min);

    target.style.backgroundSize = percentage + "% 100%";
    valRef.current.style.left = percentage + "%";

    handleFilter({ ...filter, price: e.target.value });
  }
  return (
    <div className="w-full mt-5">
      <div className=" relative h-2 ml-2 mr-[71px] mb-4">
        <span
          ref={valRef}
          className="absolute text-slate-100 rang_num leading-8 left-full -top-5 w-[40px] h-[30px] flex items-center justify-center text-xs font-semibold"
        >
          {filter?.price}
        </span>
      </div>
      <div className="flex items-center gap-2 text-slate-800">
        <span className="font-semibold">0</span>
        <input
          value={filter?.price}
          onChange={handleInputChange}
          className="w-full"
          type="range"
          name="price"
          min={0}
          max={1000}
          step={100}
        />
        <span className="font-semibold">1000</span>
      </div>
    </div>
  );
};

export default SliderRange;
