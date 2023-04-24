import Media from "react-media";
import { Fragment } from "react";

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
      {/* <h2>Najbogatsze banki świata</h2>
      <ul>
        {data.map((bankInfo) => (
          <li key={bankInfo.id}>{bankInfo.bank_name}</li>
        ))}
      </ul> */}

     <Media queries={{
          small: "(max-width: 499px)",
          medium: "(min-width: 500px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <>
        <h2>Najbogatsze banki świata</h2>
        <ul>
          {data.map((bankInfo) => (<>
            <li key={bankInfo.id}>{bankInfo.bank_name}</li> <br></br>  <br></br>
            
</>
          ))}
        </ul>
       </>}
              {matches.medium && <>
        
        <h2>Najbogatsze banki świata</h2>
        <ul>
          {data.map((bankInfo) => (<>
            <li key={bankInfo.id}>{bankInfo.bank_name}</li>  <br></br>
            </>
          ))}
        </ul>
       </>}
              {matches.large && <>
        
        <h2>Najbogatsze banki świata</h2>
        <ul>
          {data.map((bankInfo) => (
            <li key={bankInfo.id}>{bankInfo.bank_name}</li>
          ))}
        </ul>
       </>}
            </Fragment>
          )}
        </Media> 
    </div>
  );
};
export default Api;
