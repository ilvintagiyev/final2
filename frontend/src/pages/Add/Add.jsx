import React from 'react'
import "./Add.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Add() {
  async  function getadd(val) {
        const res =await fetch("http://localhost:8585/ilvin",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(val)
        })
        const data =await res.json()
        
        
    }
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>ClothesShop</title>
    <link rel="icon" type="image/svg+xml" href="https://globalnews.ca/wp-content/uploads/2023/10/IMG_1051-rotated-e1699035715210.jpg?quality=85&strip=all&w=1200" />

      </Helmet>
  </HelmetProvider>
    <Formik
       initialValues={{ name: '', price: '', image: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         price: Yup.string()
           .required('Required'),
         image: Yup.string().required('Required'),
       })}
       onSubmit={(values, {resetForm}) => {
         setTimeout(() => {
          getadd(values)
          resetForm()
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <label htmlFor="image">Image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <button type="submit">Add me</button>
       </Form>
     </Formik>
    </>
  )
}

export default Add