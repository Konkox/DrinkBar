const { useEffect, useState } = require("react");

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/banks?size=10")
      .then((data) => data.json())
      .then((data_list) => setData(data_list));
  }, []);

  return (
    <div>
      <h2>Najbogatsze banki świata</h2>
      <ul>
        {data.map((bankInfo) => (
          <li key={bankInfo.id}>{bankInfo.bank_name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Api;
