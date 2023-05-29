import Head from "next/head";
import ProdItem from "./proditem";
import { useState } from "react";
const Mazaya = () => {
  const[b,setb]=useState("scl")
  const[anm,setanm]=useState("item-left")
  const[anm1,setanm1]=useState("item-left1")
  const[scale,setscale]=useState("itscale")
  
  document.addEventListener("scroll",()=>{if(document.documentElement.scrollTop>400){
   setanm("item-right")
   setanm1("item-right1")
   setscale("itscale1")
  }})
    
    return (  
        <div className="mt-1 mb-2 w-100 p-0">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <h4 className="col-12 col-lg-3 my-3 title ms-auto">  أحدث المقالات المنشورة في جريدة الرياض</h4>
        <div className="w-100 row m-0 p-0">
        <a  className=" row col-12 col-lg-4 m-0 " href="https://www.alriyadh.com/1998302">

  <div className="w-100 p-1">
    <div className="w-100 border border-1 rounded p-0">
    <img className="w-100 " src="aa1.jpg" alt=""/>
    <h5 className=" m-1 asd text-end weight">
    مجلس التجارة الإلكترونية
    </h5>
    <p className="p-2 text-end">
    تأتي المملكة العربية السعودية في المرتبة الـ 25 في قائمة
     أكبر أسواق التجارة الإلكترونية حول العالم، بحجم عائدات 
    ....وصل إلى 7 مليارات دولار، وهي من أعلى 10 دول نمواً في مجال التجارة الإلكترونية
    </p>
    <a className="asd text-end p-1" href="https://www.alriyadh.com/1998302">إقرأ المزيد</a>
    <hr className="w-100 p-0"/>
    <h6 className="text-end p-1 weight m-1">الهنوف بن حسان ___ فبراير 19, 2023</h6>
    </div>
  </div>

        </a>
        <a  className=" row col-12 col-lg-4 m-0  mt-1" href="https://www.alriyadh.com/2013500">

<div className="w-100 p-1">
  <div className="w-100 border border-1 rounded p-0">
  <img className="w-100 " src="aa2.jpg" alt=""/>
  <h5 className=" m-1 asd text-end weight">
  التجارة الإلكترونية في فرانكفورت
    </h5>
  <p className="p-2 text-end">
  ألمانيا عرّابة صناعة السيارات العالية الجودة التي لم تنتصر على فرنسا إلا في أمرين: صناعة السيارات، والتجارة الإلكترونية.

وتعد فرانكفورت واحدة من أهم المراكز المالية العالمية   </p>
  <a className="asd text-end p-1" href="https://www.alriyadh.com/2013500">إقرأ المزيد</a>
  <hr className="w-100 p-0"/>
  <h6 className="text-end p-1 weight m-1">الهنوف بن حسان ___ مايو 22, 2023</h6>
  </div>
</div>

      </a>
      <a  className=" row col-12 col-lg-4 m-0  mt-1" href="https://www.alriyadh.com/1919563">

<div className="w-100 p-1">
  <div className="w-100 border border-1 rounded p-0">
  <img className="w-100 " src="aa3.jpg" alt=""/>
  <h5 className=" m-1 asd text-end weight">
  التجارة الإلكترونية.. البترول الجديد
    </h5>
  <p className="p-2 text-end">

  التجارة الإلكترونية كما تم تعريفها هي عملية تبادل السلع أو الخدمات والمعلومات وإيصالها بشكل إلكتروني،
   كانت بداياتها منذ ما يقارب 40 سنة، وحتى هذا اليوم مازالت التجارة الإلكترونية في نمو وتطور.

</p>
  <a className="asd text-end p-1" href="https://www.alriyadh.com/1919563">إقرأ المزيد</a>
  <hr className="w-100 p-0"/>
  <h6 className="text-end p-1 weight m-1">الهنوف بن حسان ___ نوفمبر 20, 2021</h6>
  </div>
</div>

      </a>
      </div>
     
</div>
    );
}
 
export default Mazaya;