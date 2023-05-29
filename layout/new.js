import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";
import ProdItem from "./proditem";

const NEw = (props) => {
    let storage=[]
    const mob =props.data? props.data:[]
    const mob1= mob.length>4?mob.slice(0,4):mob
    const desk =props.data? props.data:[]
    const desk1= desk.length>8?desk.slice(0,8):desk
    const [appState, setAppState] = useAppContext()
    const i=["i1.png","i2.png","i3.png","i4.png"]
    const i2=["i1.png","i2.png","i3.png","i4.png"]
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="row w-100">
    <h4 className="col-12 col-lg-3 title ms-auto"> أحدث الكتب</h4>

</div>
<div  >
    
    <div className="">
    <div className="row ">
        {/* {
       i.map((item)=>(
        <img className="col-12 col-lg-3 p-2" src={item} alt=""/>
        ))
    } */}
 <a className="col-12 col-lg-4 p-2" href="https://www.jarir.com/arabic-books-589237.html">
    <div className="border border-1 rounded bgasd1 p-0">     
   
    <div className="p-2 w-100 row">
        <div className="col-7 ">
    <h5 className=" m-1 asd text-center  weight">
    كتاب اليسر    </h5>
    <p className="p-1 text-end">
    تطوير الذات    </p>
<a className="text-white bgasd roundrd border-0 text-end p-1" href="https://www.jarir.com/arabic-books-589237.html">رابط الكتاب</a>

</div>
        <img className="col-5 " src="bb1.jpg" alt=""/>
        </div>  
    </div>
    </a>
    <a className="col-12 col-lg-4 p-2" href="https://www.jarir.com/default-category/97860306633-arabic-books-535262.html">
    <div className="border border-1 rounded bgasd1 p-0">     
   
    <div className="p-2 w-100 row">
        <div className="col-7 ">
    <h5 className=" m-1 asd text-center  weight">
    كتاب باختصار    </h5>
    <p className="p-1 text-end">
    تطوير الذات    </p>
<a className="text-white bgasd roundrd border-0 text-end p-1" href="https://www.jarir.com/default-category/97860306633-arabic-books-535262.html">رابط الكتاب</a>

</div>
        <img className="col-5 " src="bb2.jpg" alt=""/>
        </div>  
    </div>
    </a>
    </div>
    </div>


 </div>
 <img className="w-100 mt-3 d-none d-lg-block" src="cer.svg" alt=""/>
      <img className="w-100 mt-3 d-block d-lg-none" src="cer1.svg" alt=""/>
</div>
    );
}
 
export default NEw;