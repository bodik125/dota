import React,{useEffect, useState , Component} from 'react';
import Filters from '../filter/Filters';
import recolor from '../restr/recolor';
// import Search from '../search/serching';
import NameForm from '../search/serching';
// import {serch} from '../search/serching';
import rename from '../restr/rename';
import {popup_click} from '../popup/popup';
import {popup_click_exit} from '../popup/popup';
import { NavLink , Link,Route, Switch } from 'react-router-dom';


// import {p} from '../popup/popup';




const Posts = ({posts, loading, curentHeroes, curentPage, setHeroes,pageNumber,  setCurrentPage, postsPerPage, paginate , setPosts, allHeroes, setFilterRole , abc, setPostsPerPage,setA}) =>{
  const api = "https://api.opendota.com";
  const [qwe, setQwe] = useState(0);
  const [like, setLike] = useState([]);
  const click =(elements)=>{
    setQwe(elements);
    console.log(elements);
    console.log(qwe);

    setA(true)
  }

  const liked = (elements)=>{
    let filt_like = 0;
    console.log(like);
    let pro_win = like.find(el=>el.id === elements.id);
    if(pro_win){
    filt_like =  like.filter(li=> pro_win.id !== li.id);
    }
    else{
     filt_like = [...like,  elements];

    }
    setLike(filt_like);
    localStorage.setItem('chosen',JSON.stringify(filt_like));
  }
  const PopUp =({qwe})=>{
    return(
    qwe.length && qwe.map(elements=> <div style={{display: abc ? "block " : "none"}} className="popup_block"><div  className="pop_block">
    <div onClick={()=>popup_click_exit(setA, setPostsPerPage)} className="exit">X</div>
  <p className="hero_name_pop">{elements.localized_name}</p> 
  <p className="hero_img_pop"><img src={api +  elements.img} ></img></p>
  <div className="info_area_pop">
  <p className="hero_attr_pop">{rename(elements.primary_attr)}</p>
  <h3 className="hero_position-title_pop">Роли</h3>
  <p className="hero_position_pop">{elements.roles.map((elemRols)=><p>{elemRols}</p>)}</p>
  <div className="inf">
  <div >
  <p className="hero_attack_pop">Тип атаки - {elements.attack_type}</p>
  <p className="hero_attack_pop">Атак ренж - {elements.attack_range}</p>
  <p className="hero_attack_pop">Базовая ловкость - {elements.base_agi}</p>
  <p className="hero_attack_pop">Базовая cила - {elements.base_str}</p>
  <p className="hero_attack_pop">Базовая интелект - {elements.base_int}</p>
  </div>
  <div >
  <p className="hero_attack_pop">Число ног - {elements.legs}</p>
  <p className="hero_attack_pop">МувСпид - {elements.move_speed}</p>
  <p className="hero_attack_pop">Базовый атакспид - {elements.attack_rate}</p>
  <p className="hero_attack_pop">Базовый демедж - {elements.attack_rate}</p>
  <p className="hero_attack_pop">Базовый армор - {elements.base_armor}</p>
  </div>
  </div>
  </div>
  </div>
  </div>

    )
    )
  }
  const ifLiked = (id) => like.find(e => e.id === id);

    if(loading){
        return<h2>Loading...</h2>
    }
    debugger
    return ( 
  <div>
        {/* <Popup setA={setA} setPostsPerPage={setPostsPerPage}/> */}
        <Filters like = {like} setLike={setLike} setPosts ={setPosts} allHeroes={allHeroes} setFilterRole={setFilterRole}/>
        {/* <Search/> */}
          <div  className="hero">
        {
        posts.length && posts.map(elements=><div  className={recolor(elements.primary_attr)}>
          <p className={`heart ${ifLiked(elements.id) ? 'liked' : '' }`} onClick={()=>liked(elements, elements.pro_win)} ></p>
        <p className="hero_name">{elements.localized_name}</p> 
        <p className="hero_img"><img src={api +  elements.img} ></img></p>
        <p className="hero_attr">{rename(elements.primary_attr)}</p>
        <p className="hero_attack">{elements.attack_type}</p>
        <h3 className="hero_position-title">Роли</h3>
        <p className="hero_position">{elements.roles.map((elemRols)=><p>{elemRols}</p>)}</p>
          
        <Link to={`${elements.localized_name}`}><div  className="button_popup" onMouseUp={()=>click([elements])}
        style={{}}>  More </div></Link>
        {/* PopUp */}
        <Switch>
         
      <Route path={`${elements.localized_name}`} render={()=>PopUp}></Route>
      </Switch>
              </div>
        )}
          
        
      </div>     



  </div>
  
  )};

  
    

  export default Posts;