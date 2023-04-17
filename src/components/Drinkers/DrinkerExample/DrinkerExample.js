const Example = ({ id, name, age, preferences, del_data }) => (
  <p>
    Name: {name} Age: {age} Likes: {preferences}{" "}
    <button onClick={(evt) => del_data(id)}>x</button>
  </p>
);

export default Example;
