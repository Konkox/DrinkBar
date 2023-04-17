// formularz

import { useState } from "react";
import DrinkerData from "../Drinkers/DrinkerData";
import DrinkerForm from "../Drinkers/DrinkerForm/DrinkerForm";
import DrinkerList from "../Drinkers/DrinkerList/DrinkerList";

const D = () => {
  const [data_drinker, setData_drinker] = useState(DrinkerData);

  const add_Drinker = (newData) => {
    setData_drinker([...data_drinker, newData]);
  };

  const delete_data = (id) => {
    setData_drinker((prevState) => prevState.filter((elem) => elem.id !== id));
  };

  return (
    <div>
      <DrinkerForm addHandler={add_Drinker} />
      <DrinkerList Data={data_drinker} delHandler={delete_data} />
    </div>
  );
};
export default D;
