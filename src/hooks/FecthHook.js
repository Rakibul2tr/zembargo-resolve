import { useEffect, useState } from "react";

const FecthHook=()=>{
    const [homeheader,serhomeheader]=useState([])

    const [homeabout,sethomeabout]=useState([])

    const [servicehead,setservicehead]=useState([])

    const [services,setservices]=useState([])

    const [servicSingle,setServieSingle]=useState([])

    const [homeservice,sethomeservice]=useState([]);

    const [homeRealy,sethomeRealy]=useState([])

    const [homearea,sethomearea]=useState([])

    const [faqpage,setfaqpage]=useState([])

    const [aboutpage,setaboutpage]=useState([])

    const [aboutheader,setaboutheader]=useState([])

    const [userInfo,setUserInfo]=useState()

    

    ////home page data
    useEffect(()=>{
    fetch('http://localhost:5000/homehead')
    .then(res=>res.json())
    .then(data=>serhomeheader(data))
    },[]);

    useEffect(()=>{
    fetch('http://localhost:5000/homeabout')
    .then(res=>res.json())
    .then(data=>sethomeabout(data))
    },[]);

    useEffect(()=>{
        fetch('http://localhost:5000/homeservice')
        .then(res=>res.json())
        .then(data=>sethomeservice(data))
    },[]);

    useEffect(()=>{
      fetch('http://localhost:5000/homeHomeReliability')
      .then(res=>res.json())
      .then(data=>sethomeRealy(data))
    },[]);

    useEffect(()=>{
      fetch('http://localhost:5000/homeArea')
      .then(res=>res.json())
      .then(data=>sethomearea(data))
    },[]);


    //service page data====================
    useEffect(()=>{
        fetch('http://localhost:5000/servicehead')
        .then(res=>res.json())
        .then(data=>setservicehead(data));
    },[]);

    useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setservices(data))
    },[])

    //service single data
    useEffect(()=>{
    fetch('http://localhost:5000/servicsingle')
    .then(res=>res.json())
    .then(data=>setServieSingle(data))
    },[])

    //About page data fecth=========================
    useEffect(()=>{
        fetch('http://localhost:5000/about')
        .then(res=>res.json())
        .then(data=>setaboutpage(data));
     },[]);
    //About page header data fecth
    useEffect(()=>{
        fetch('http://localhost:5000/aboutheader')
        .then(res=>res.json())
        .then(data=>setaboutheader(data));
     },[]);

    //Faq Question page data========================
    useEffect(()=>{
    fetch('http://localhost:5000/faq')
    .then(res=>res.json())
    .then(data=>setfaqpage(data))
    },[])


    const [userdata,setuserdata]=useState([])

      useEffect(()=>{
        fetch('http://localhost:5000/allusers')
        .then(res=>res.json())
        .then(data=>{
            setuserdata(data);
        })
      },[])

    const [contact,setcontact]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/contact')
        .then(res=>res.json())
        .then(data=>{
            setcontact(data);
        })
    },[])
    return {
        homeheader,
        homeabout,
        servicehead,
        homeservice,
        homeRealy,
        services,
        faqpage,
        aboutpage,
        homearea,
        aboutheader,
        servicSingle,
        userdata,
        setuserdata,
        contact
        
    }

}

export default FecthHook;


    

    