import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Admin.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Admin() {
    const [adminshow, setadminshow] = useState([])
    useEffect(() => {
      showadmin()
    }, [])

 async  function showadmin() {
    const res = await fetch("http://localhost:8585/ilvin")
    const data = await res.json()
    console.log(data);
    setadminshow(data)
        
    }

    async function deleteadmin(id) {
        const res = await fetch("http://localhost:8585/ilvin/"+id,{method:"delete"})
        if (res.status===200) {

            setadminshow([...adminshow.filter((item)=>item._id!==id)])
        }
    }
    
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>ClothesShop</title>
    <link rel="icon" type="image/svg+xml" href="https://globalnews.ca/wp-content/uploads/2023/10/IMG_1051-rotated-e1699035715210.jpg?quality=85&strip=all&w=1200" />

      </Helmet>
  </HelmetProvider>
<table>
        <thead>
            <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>options</th>
            </tr>
        </thead>
        <tbody className='admintable'>
            {adminshow.map((x)=>(
                <tr key={x._id}>
                    <td><img src={x.image} alt="" /></td>
                    <td><h3>{x.name}</h3></td>
                    <td><h3>{x.price}</h3></td>
                    <td><button onClick={()=>deleteadmin(x._id)}>x</button></td>
                    <td></td>
                </tr>
            ))}
        </tbody>
     </table>
    </>
  )
}

export default Admin