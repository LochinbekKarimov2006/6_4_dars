import React, { useState } from 'react'
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
import img5 from "../img/img5.png"

function Login() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [tel, setTel] = useState('')
    let [davlat, setDavlat] = useState('')
    let [shahar, setShahar] = useState('')
    let [yashashJoy, setYashashJoy] = useState('')
    let [hodimlar, setHodimlar] = useState('')
    let [izoh, setIzoh] = useState('')
    let [imageUrl, setImageUrl] = useState(null)
    let [dunyo,setDunyo]=useState('')
    let [instagram,setInstagram]=useState('')
    let [telegram,setTelegram]=useState('')
    let [feyzbuk,setFeyzbuk]=useState('')
    let [github,setGithub]=useState('')

    let handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
        }
    };

    function keyingisi() {
        let data = {
            name,
            email,
            tel,
            davlat,
            shahar,
            yashashJoy,
            hodimlar,
            izoh,
            imageUrl,
            dunyo,
            instagram,
            telegram,
            feyzbuk,
            github,
        }
        localStorage.setItem('data', data);
        console.log(data)
        setName('');
        setEmail('');
        setTel('');
        setDavlat('');
        setShahar('');
        setYashashJoy('');
        setHodimlar('');
        setIzoh('');
        setImageUrl(null);
        setDunyo('');
        setInstagram('');
        setTelegram('');
        setFeyzbuk('');
        setGithub('');
    }
    let [dunyo1,setDunyo1]=useState(false)
    let [instagram1,setInstagram1]=useState(false)
    let [telegram1,setTelegram1]=useState(false)
    let [feyzbuk1,setFeyzbuk1]=useState(false)
    let [github1,setGithub1]=useState(false)
    function korinmas (e){
        setDunyo1(false)
        setInstagram1(false)
        setTelegram1(false)
        setFeyzbuk1(false)
        setGithub1(false)
    }
    return (
        <div className='div-2'>
            <div className='div-3'>
                <div className='div-4'>
                    <h1>Kompaniya ma’lumotlari</h1>
                    <p className='p-1'>Kompaniya haqidagi ma’lumotlarni kiriting</p>
                    <div className='div-5'>
                        <div>
                            {imageUrl && <img className='img' src={imageUrl} alt="" />}
                        </div>
                        <label className='h6' htmlFor="file-upload">Yuklash</label>
                        <input
                            className='kl'
                            type="file"
                            id='file-upload'
                            accept='image/png, image/jpeg, image/jpg'
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className='div-6'>
                        <label className='label' htmlFor="name1">Kompaniya nomi *</label>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} id='name1' type="text" placeholder="Kompaniya nomi" className="input input-bordered w-full " />
                        <label className='label' htmlFor="name2">Email *</label>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} id='name2' type="text" placeholder="Email" className="input input-bordered w-full " />
                        <label className='label' htmlFor="name3">Telefon raqami *</label>
                        <input value={tel} onChange={(e) => { setTel(e.target.value) }} id='name3' type="text" placeholder="UZ +9989" className="input input-bordered w-full" />
                    </div>
                    <p className='label'>Linklar *</p>
                    <div className='div-10'>
                    <div className='div-7'>
                        <button onClick={(e)=>{korinmas(e), setDunyo1(true)}}><img src={img5} alt="" /></button>
                        <button onClick={(e)=>{korinmas(e), setInstagram1(true)}}><img src={img2} alt="" /></button>
                        <button onClick={(e)=>{korinmas(e), setTelegram1(true)}}><img src={img4} alt="" /></button>
                        <button onClick={(e)=>{korinmas(e), setFeyzbuk1(true)}}><img src={img1} alt="" /></button>
                        <button onClick={(e)=>{korinmas(e), setGithub1(true)}}><img src={img3} alt="" /></button>
                    </div>
                    {dunyo1&&<input value={dunyo} onChange={(e) => { setDunyo(e.target.value) }} id='name3' type="text" placeholder="Link kiriting" className="input input-bordered w-full" />}
                    {instagram1&&<input value={instagram} onChange={(e) => { setInstagram(e.target.value) }} id='name3' type="text" placeholder="Instagram link" className="input input-bordered w-full" />}
                    {telegram1&&<input value={telegram} onChange={(e) => { setTelegram(e.target.value) }} id='name3' type="text" placeholder="Telegram link" className="input input-bordered w-full" />}
                    {feyzbuk1&&<input value={feyzbuk } onChange={(e) => { setFeyzbuk(e.target.value) }} id='name3' type="text" placeholder="Facbook link" className="input input-bordered w-full" />}
                    {github1&&<input value={github} onChange={(e) => { setGithub(e.target.value) }} id='name3' type="text" placeholder="Git Hub link" className="input input-bordered w-full" />}

                    </div>

                    <div className='div-8'>
                        <div>
                            <p className='label'>Davlat *</p>
                            <select value={davlat} onChange={(e) => { setDavlat(e.target.value) }} className="select select-bordered w-full ">
                                <option disabled selected>Davlat</option>
                                <option>Uz</option>
                                <option>Rs</option>
                            </select>
                        </div>
                        <div>
                            <p className='label'>Shahar *</p>
                            <select value={shahar} onChange={(e) => { setShahar(e.target.value) }} className="select select-bordered w-full ">
                                <option disabled selected>Shahar</option>
                                <option>Fargona</option>
                                <option>Toshkent</option>
                            </select>
                        </div>
                    </div>
                    <div className='div-6'>
                        <label className='label' htmlFor="1212">Yashash joyi *</label>
                        <input value={yashashJoy} onChange={(e) => { setYashashJoy(e.target.value) }} id='1212' type="text" placeholder="Joy" className="input input-bordered w-full " />
                        <label className='label' htmlFor="name5">Hodimlar soni *</label>
                        <input value={hodimlar} onChange={(e) => { setHodimlar(e.target.value) }} id='name5' type="text" placeholder="Hodimlar soni *" className="input input-bordered w-full " />
                        <label className='label' htmlFor="name6">Izoh *</label>
                        <textarea value={izoh} onChange={(e) => { setIzoh(e.target.value) }} className='textarea textarea-bordered' name="" id="name6" placeholder='Kompaniya haqida izoh qoldiring' cols="30" rows="10" ></textarea>
                    </div>
                    <div className='div-9'>
                        <button>Ortga</button>
                        <button onClick={() => { keyingisi() }}>Keyingisi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
