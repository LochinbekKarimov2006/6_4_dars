import React from 'react'
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
import img5 from "../img/img5.png"
function Login() {
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
                <label className='label' htmlFor="name">Kompaniya nomi *</label>
                <input id='name' type="text" placeholder="Kompaniya nomi" className="input input-bordered w-full " />
                <label className='label' htmlFor="name">Email *</label>
                <input id='name' type="text" placeholder="Email" className="input input-bordered w-full " />
                <label className='label' htmlFor="name">Telefon raqami *</label>
                <input id='name' type="text" placeholder="UZ +9989" className="input input-bordered w-full" />
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
            <select className="select select-bordered w-full ">
  <option disabled selected>Davlat</option>
  <option>Uz</option>
  <option>Rs</option>
</select>
</div>
<div>
<p className='label'>Shahar *</p>
<select className="select select-bordered w-full ">
  <option disabled selected>Shahar</option>
  <option>Fargona</option>
  <option>Toshkent</option>
</select>
</div>

            </div>
            <div className='div-6'>
                <label className='label' htmlFor="name">Yashash joyi *</label>
                <input id='name' type="text" placeholder="Joy" className="input input-bordered w-full " />
                <label className='label' htmlFor="name">Hodimlar soni *</label>
                <input id='name' type="text" placeholder="Hodimlar soni *" className="input input-bordered w-full " />
                <label className='label' htmlFor="name">Izoh *</label>
                <textarea className='textarea textarea-bordered' name="" id="" placeholder='Kompaniya haqida izoh qoldiring' cols="30"  rows="10" ></textarea>
            </div>
            <div className='div-9'>
                <button>Ortga</button>
                <button>Keyingisi</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login