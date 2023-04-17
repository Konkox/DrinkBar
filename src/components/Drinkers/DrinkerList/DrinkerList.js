import DrinkerExample from "../DrinkerExample/DrinkerExample";

const DrinkerList = ({ Data, delHandler }) =>
  Data.map((data) => (
    <DrinkerExample
      key={data.id}
      id={data.id}
      name={data.name}
      age={data.age}
      preferences={data.preferences}
      del_data={delHandler}
    />
  ));

export default DrinkerList;
