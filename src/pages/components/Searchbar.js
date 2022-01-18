import { AutoComplete } from "antd";
import '../components/Searchbar.css';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import axios from "axios";
const Searchbar = () => {
    let [input,setInput] = useState('');
    let handleChange = (e) =>{
        setInput(e);
    }
    let [result,setResult] = useState('');
    let [next,setNext] = useState('');
    let arr = [];
    useEffect(() => {
        let call = async () => {
            await axios.get('https://swapi.dev/api/people/').then(res =>{
                setResult(res.data.results);
                setNext(res.data.next);
            })
        }
        call();
    },[])
    useEffect(() => {
        arr = [];
        let i = 0;
        while(i<result.length){
            if(result[i].name.toUpperCase().indexOf(input.toUpperCase()) !== -1){
                arr.push(result[i].name)
            }
            i++;
        }
        console.log(arr)
    },[input])
    let option = [
        {
            value:arr[0]
        }
    ]
    return ( 
        <div>
            <div>
            <AutoComplete
                className="autocomplete"
                placeholder="your character name"
                onChange={handleChange}
                options={option}
                filterOption={(inputValue,option) =>{
                    return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }}
            />
            </div>
            <div><button className="sign_in">SIGN IN</button></div>

        </div>
       
     );
}
 
export default Searchbar;