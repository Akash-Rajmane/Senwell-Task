import { useState } from "react";
import "./styles.css";

const arr = [
  {
    name: "Darla"
  },
  {
    name: "Pandora"
  },
  {
    name: "Darla"
  },
  {
    name: "Iorgos"
  },
  {
    name: "Pandora"
  },
  {
    name: "Pandora"
  },
  {
    name: "Darla"
  },
  {
    name: "Maxine"
  },
  {
    name: "Pandora"
  },
  {
    name: "Hannis"
  },
  {
    name: "Darla"
  },
  {
    name: "Pandora"
  },
  {
    name: "Maureene"
  },
  {
    name: "Pandora"
  },
  {
    name: "Nichole"
  },
  {
    name: "Nathalia"
  },
  {
    name: "Pandora"
  },
  {
    name: "Roland"
  },
  {
    name: "Pandora"
  },
  {
    name: "Pandora"
  },
  {
    name: "Nathalia"
  },
  {
    name: "Otto"
  },
  {
    name: "Tilda"
  },
  {
    name: "Pandora"
  },
  {
    name: "Otto"
  },
  {
    name: "Libby"
  },
  {
    name: "Otto"
  },
  {
    name: "Pandora"
  },
  {
    name: "Otto"
  },
  {
    name: "Rex"
  },
  {
    name: "Irita"
  },
  {
    name: "Pandora"
  }
];

export default function App() {
  const [data, setData] = useState(arr);

  const freqCounter = (arr) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
      let el = arr[i].name;
      obj[el] ? (obj[el] += 1) : (obj[el] = 1);
    }

    let countArr = Object.values(obj);
    let nameArr = Object.keys(obj);
    let newArr = [];
    for (let i = 0; i < nameArr.length; i++) {
      newArr.push({ name: nameArr[i], count: countArr[i] });
    }

    return newArr;
  };

  const dataArr = freqCounter(data);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {dataArr.map((el, id) => {
            let { name, count } = el;
            let styles;
            if (count > 2 && count < 10) {
              styles = { backgroundColor: "yellow" };
            } else if (count > 0 && count < 3) {
              styles = { backgroundColor: "red" };
            } else if (count > 10) {
              styles = { backgroundColor: "green" };
            }

            return (
              <tr style={styles} key={id}>
                <td>{name}</td>
                <td>{count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
