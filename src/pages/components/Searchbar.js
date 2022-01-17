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
    let [option,setOption] = useState('');
    let [result,setResult] = useState('');
    let [next,setNext] = useState('');
    let [option1,setOption1] = useState('');
    let [option2,setOption2] = useState('');
    let [option3,setOption3] = useState('');
    useEffect(() => {
        let call = async () => {
            await axios.get('https://swapi.dev/api/people/').then(res =>{
                setResult(res.data.results);
                setNext(res.data.next);
            })
        }
        call();
    },[])
    console.log((result.filter(person => true)));
    return ( 
        <div>
            <div>
            <AutoComplete
                className="autocomplete"
                placeholder="your character name"
                onChange={handleChange}
                options={[
                    {
                        value: "hey"
                    }
                ]}
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