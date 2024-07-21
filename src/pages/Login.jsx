import React, { useState } from 'react'
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
import img5 from "../img/img5.png"
function Login() {
    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [tel,setTel]=useState('')
    let [davlat,setDavlat]=useState('')
    let [shahar,setShahar]=useState('')
    let [yashashJoy,setYashashJoy]=useState('')
    let [hodimlar,setHodimlar]=useState('')
    let [izoh,setIzoh]=useState('')
    function keyingisi(){
        let data ={
            name,
            email,
            tel,
            davlat,
            shahar,
            yashashJoy,
            hodimlar,
            izoh,
        }
        console.log(data)
    }
    // let []=useState('')
    // let []=useState('')
    // let []=useState('')
    // let []=useState('')
    // let []=useState('')
  return (
    <div className='div-2'>
        <div className='div-3'>
            <div className='div-4'>
            <h1>Kompaniya ma’lumotlari</h1>
            <p className='p-1'>Kompaniya haqidagi ma’lumotlarni kiriting</p>
            <div className='div-5'>
                <div><img src="" alt="" /></div>
                <h6>Yuklash</h6>
            </div>
            <div className='div-6'>
                <label className='label' htmlFor="name1">Kompaniya nomi *</label>
                <input onChange={(e)=>{setName(e.target.value)}} id='name1' type="text" placeholder="Kompaniya nomi" className="input input-bordered w-full " />
                <label className='label' htmlFor="name2">Email *</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} id='name2' type="text" placeholder="Email" className="input input-bordered w-full " />
                <label className='label' htmlFor="name3">Telefon raqami *</label>
                <input onChange={(e)=>{setTel(e.target.value)}} id='name3' type="text" placeholder="UZ +9989" className="input input-bordered w-full" />
            </div>
                <p className='label'>Linklar *</p>
            <div className='div-7'>
                <button><img src={img1} alt="" /></button>
                <button><img src={img2} alt="" /></button>
                <button><img src={img3} alt="" /></button>
                <button><img src={img4} alt="" /></button>
                <button><img src={img5} alt="" /></button>
            </div>
            <div className='div-8'>
                <div>

                <p className='label'>Davlat *</p>
            <select onChange={(e)=>{setDavlat(e.target.value)}} className="select select-bordered w-full ">
  <option disabled selected>Davlat</option>
  <option>Uz</option>
  <option>Rs</option>
</select>
</div>
<div>
<p className='label'>Shahar *</p>
<select onChange={(e)=>{setShahar(e.target.value)}} className="select select-bordered w-full ">
  <option disabled selected>Shahar</option>
  <option>Fargona</option>
  <option>Toshkent</option>
</select>
</div>

            </div>
            <div className='div-6'>
                <label className='label' htmlFor="1212">Yashash joyi *</label>
                <input onChange={(e)=>{setYashashJoy(e.target.value)}} id='1212' type="text" placeholder="Joy" className="input input-bordered w-full " />
                <label className='label' htmlFor="name5">Hodimlar soni *</label>
                <input onChange={(e)=>{setHodimlar(e.target.value)}} id='name5' type="text" placeholder="Hodimlar soni *" className="input input-bordered w-full " />
                <label className='label' htmlFor="name6">Izoh *</label>
                <textarea onChange={(e)=>{setIzoh(e.target.value)}} className='textarea textarea-bordered' name="" id="name6" placeholder='Kompaniya haqida izoh qoldiring' cols="30"  rows="10" ></textarea>
            </div>
            <div className='div-9'>
                <button>Ortga</button>
                <button onClick={()=>{keyingisi()}}>Keyingisi</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login