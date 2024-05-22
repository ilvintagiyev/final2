import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Grid } from '@mui/material'
function Home() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    showproducts()
  }, [])

  async function showproducts() {
    const res = await fetch("http://localhost:8585/ilvin")
    const data = await res.json()
    setproducts(data)

  }




  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ClothesShop</title>
          <link rel="icon" type="image/svg+xml" href="https://globalnews.ca/wp-content/uploads/2023/10/IMG_1051-rotated-e1699035715210.jpg?quality=85&strip=all&w=1200" />

        </Helmet>
      </HelmetProvider>
      <div className="section1">
        <h3>SPRING / SUMMER COLLECTION 2017</h3>
        <h1>Get up to 30% Off <br /> New Arrivals</h1>
        <button>SHOP NOW</button>
      </div>
      <div className="section2">
        <Container>
          <Grid container spacing={2}>
            <button>
              <input type="text" />
              <label>search</label>
            </button>
            <div className="cards">
              {products.map((x) => (


                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <div className="card" key={x._id}>
                    <img src={x.image} alt="" />
                    <h2>{x.name}</h2>
                    <h2>{x.price}</h2>
                  </div>
                </Grid>
              ))}
            </div>
          </Grid>
        </Container>
      </div>


      <div className="section3">

      </div>

    </>

  )
}

export default Home