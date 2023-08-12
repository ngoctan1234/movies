import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SinhVien from './SinhVien';
import MayTinh from './MayTinh';
function App1() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("red");
  const [count, setCount]=useState(1)
  const [sv,setSv]=useState({name:"Lê Mèo",old:2})
  const handle_incre=()=>{
    setCount(pre=>pre+1)//count=count+1
    setCount(pre=>pre+1)
    setCount(pre=>pre+1)
  }
  const handle_changeName=()=>{
    setSv({...sv,name:name,old:count})
    
  }
  console.log("render")
  return (
    <div className="App">
      <MayTinh />
      <input type="text " placeholder="Nhập tên nha" value={name} onChange={(e)=>setName(e.target.value)}/>
      <h1>Sinh viên: {sv.name} và {sv.old} tuổi</h1>
      <button onClick={handle_changeName}>Đổi tên và tuổi</button>
      <SinhVien />
      <button onClick={()=>setColor("green")}>ChangeColor</button>
      <h1>{count}</h1>
       <button onClick={handle_incre}>Đổi tuổi</button>


      <h2 style={{color: color, backgroundColor: 'lime'}}> Xin chào reactjs</h2>
    </div>
  );
}

export default App1;
