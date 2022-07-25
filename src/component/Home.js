import React from 'react'
import {useEffect,useState} from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {Loading} from './Loading';
import {EditForm} from './EditForm';

export const Home = () => {

  const [val, setvalue] = useState([]);
  const[loader,showloader]=useState(true);
  const [show, setShow] = useState(false);
  const[data,setdata]=useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (data) => {
          setvalue(data);
          showloader(false);
        }
      );
  }, [])


  const changeColor = (e) => {
    let id=e.target.id;

    if ( document.getElementById(id).style.fill == "red") {
      document.getElementById(id).style.fill="white";
    }
    else {
      document.getElementById(id).style.fill="red";
    }
  }


  const deleteCard=(id)=>{
    // const list= [...val];
    const updatedList=val.filter(item=>item.id!==id)
    setvalue(updatedList)
  }

 const callingModal=(item)=>{
    setShow(true);
    setdata(item);
    
 }

  return (
    <>
    {loader && <Loading/>}
      {
        val.map((item) => {
          return (
            <>
            {show && <EditForm data={data} val={val} setvalue={setvalue} setShow={setShow}/>}
            <div className='card' style={{ "width": "18rem", "margin": "20px" }}>
              <div style={{ "backgroundColor": "lightgray" }}>
                <img src={'https://avatars.dicebear.com/v2/avataaars/'+item.username+'.svg?options[mood][]=happy'} className="card-img-top" alt="1" style={{ "width": "200px", "height": "200px", "marginLeft": "40px" }} />
              </div>

              <div className="card-body">
                <h5 style={{ "marginBottom": "10px" }}>{item.name}</h5>
                <div style={{ "display": "flex", "flexDirection": "row" }}>
                  <EmailOutlinedIcon /><p style={{ "marginLeft": "10px" }}>{item.email}</p>
                </div>

                <div style={{ "display": "flex", "flexDirection": "row" }}>
                  <PhoneEnabledOutlinedIcon /><p style={{ "marginLeft": "10px" }}>{item.phone}</p>
                </div>
                
                <div style={{ "display": "flex", "flexDirection": "row" }}>
                  <LanguageOutlinedIcon /><p style={{ "marginLeft": "10px" }}>{item.website}</p>
                </div>
              </div>

              <div style={{ "display": "flex", "backgroundColor": "lightgrey" }}>
                <div style={{ "width": "33.33%", "padding": "5px 30px 10px" }}>
                    <FavoriteBorderOutlinedIcon id={item.id} onClick={changeColor} style={{"fill":"white"}} />
                </div>
                <div style={{ "width": "33.33%","padding": "5px 30px 10px" }}>
                    <BorderColorOutlinedIcon onClick={()=>{callingModal(item)}}/>
                </div>
                <div style={{ "width": "33.33%", "padding": "5px 30px 10px" }}>
                    <DeleteRoundedIcon  onClick={()=>{deleteCard(item.id)}}/>
                </div>
              </div>
            </div>
            </>
          )
        })
      }
    </>
  )
}

  // const [namevalue, setNameValue] = useState("");
  // const [emailValue, setEmailValue] = useState("");
  // const [phoneValue, setPhoneValue] = useState("");
  // const [websiteValue, setWebsiteValue] = useState("");
   // function GetName(e) {
    //   setNameValue(e.target.value);
    // }
  
    // function GetEmail(e) {
    //   setEmailValue(e.target.value);
    // }
  
    // function GetPhone(e) {
    //   setPhoneValue(e.target.value);
    // }
  
    // function GetWebsite(e) {
    //   setWebsiteValue(e.target.value);
    // }