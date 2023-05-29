import Head from 'next/head';
import NEw from '../layout/new';
import Opnion from '../layout/opnion';
import styles from '../styles/Home.module.css'
import Mazaya from '../layout/s';
import { useState } from "react";
const Servises = () => {
  

  const[b,setb]=useState("scl")
  const[anm,setanm]=useState("item-right")
  const[anm1,setanm1]=useState("item-right1")
  const[scale,setscale]=useState("itscale1")
 
    return (
        < div className="w-100 p-0 m-0 u2">
        <img className="w-100" src="eCommerce.jpg" alt=""/>
       
       <div className="mt-1 mb-2 sat3 p-2">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <h4 className="col-12 col-lg-3 my-3 title ms-auto">  ماذا نقدم</h4>
<div className="d-block d-lg-none row sat w-100 h-100 rel">
  
</div>
        </div>  
        </div> 
      );
}
 
export default Servises;