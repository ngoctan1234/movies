
import { useState } from 'react';
function SinhVien() {
  const [diem,setDiem]=useState(2)
  console.log("render sinhvien")
  return (
    <div >
        <button onClick={()=>setDiem(diem+2)}>Tăng điểm</button>
      <h1>Điểm: {diem}</h1>
    </div>
  );
}

export default SinhVien;
