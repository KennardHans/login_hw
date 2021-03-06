import { AutoComplete } from "antd";
import "../components/Searchbar.css";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Searchbar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [options,setOptions] = useState([]);
  let option = []
  let arr = [];
  let handleChange = (e) => {
    setInput(e);
    // arr = [];
    // let i = 0;
    // let j = 0;
    // while (i < result.length) {
    //   if (result[i].name.toUpperCase().indexOf(input.toUpperCase()) !== -1) {
    //     arr.push(result[i].name);
    //   }
    //   i++;
    // }
    // console.log(arr);
    // while(option.length<3){
    //     if(arr[j]!== undefined){
    //         option.push(
    //             {
    //                 value: arr[j]
    //             }
    //         )
    //     }
    //     else{
    //         break;
    //     }
    //     setOptions(option)
    //     j++;
    // }
    // console.log(options)
  };
  useEffect(() => {
    let call = async () => {
      await axios.get("https://swapi.dev/api/people/").then((res) => {
        setResult(res.data.results);
      });
    };
    call();
  }, []);
  useEffect(() => {
    arr = [];
    let i = 0;
    let j = 0;
    while (i < result.length) {
      if (result[i].name.toUpperCase().indexOf(input.toUpperCase()) !== -1) {
        arr.push(result[i].name);
      }
      i++;
    }
    console.log(arr);
    while(option.length<3){
        if(arr[j]!== undefined){
            option.push(
                {
                    value: arr[j]
                }
            )
        }
        else{
            break;
        }
        setOptions(option)
        j++;
    }
    console.log(options)
  }, [input]);

  return (
    <div>
      <div>
        <AutoComplete
          className="autocomplete"
          placeholder="your character name"
          onChange={handleChange}
          options={options}
            // filterOption={(inputValue, option) => {
            //     return (
            //     option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
            //     -1
            //     );
            // }}
        />
      </div>
      <div>
        <button className="sign_in">SIGN IN</button>
      </div>
    </div>
  );
};

export default Searchbar;
