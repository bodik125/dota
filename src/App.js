import React,{useEffect, useState , Component} from 'react';
import axios from 'axios';
import './App.css';
import {styles} from "./styles";
import Posts from "./components/posts/Posts"
// import Pagination from '../paginate/pagination';
import ReactPaginate from 'react-paginate';
import { Route, Switch} from 'react-router-dom'
import {Link } from 'react-router-dom'

const API_KEY = "98ccaca2-2348-4943-b07c-e893dfd8ff2e";

const App=()=> {
const [abc, setA] = useState(false);
  
const [filter_by_attr, setFilter] = useState(0);
const [filter_by_role, setFilterRole] = useState(0);
  const [heroCard, setHeroCard] = useState([]);
  const [allHeroes, setHero] = useState(0);
  const[popup_block, setPopup] = useState(0);

  const [curentHeroes, setHeroes] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
const [imgHeroes , setImageHero] = useState([]);
 
  useEffect( ( ) => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(`https://api.opendota.com/api/heroes/?api_key=${API_KEY}`);
        setPosts(res.data);
        setHero(res.data);
        setFilterRole(res.data);
        setHeroCard(res.data);
      setLoading(false);
      }
      fetchPosts();

  },[]);
  useEffect( ( ) => {
    const fetchPosts_1 = async () => {

      const res = await axios.get(`https://api.opendota.com/api/heroStats/?api_key=${API_KEY}`);
      setImageHero(res.data);
      setPosts(res.data);
      setFilter(res.data);
      setFilterRole(res.data);
      setHeroCard(res.data);
      setHero(res.data);

    }
    fetchPosts_1();

},[]);
  //  console.log(imgHeroes)
  //Текущая страница
  const pageNumber = [];
const Pagination =({postsPerPage,totalPosts, paginate})=>{
  
  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i);
  }
  return(
    <ul className="pagination">
      {pageNumber.map(number =>(
        <li  key={number} className="page-item">
          <Link onClick={()=> paginate(number)} href={`'/' ${pageNumber}`} className="page-link">
            {number}
          </Link>
        </li>
      ))};
    </ul>
  )
  

}
  const indexOfLastPost = curentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const curentPosts = posts.slice(indexOfFirstPost , indexOfLastPost);

  const paginate = (pageNumber)=> {setCurrentPage(pageNumber)};

  const Comp = () =>  <Posts  setCurrentPage={setCurrentPage} posts = {curentPosts} loading={loading} curentHeroes={curentHeroes} setHeroes={setHeroes} setPostsPerPage={setPostsPerPage} postsPerPage={postsPerPage} setA={setA} abc={abc}  setPosts={setPosts} allHeroes={allHeroes} setFilterRole={setFilterRole}/>
  return (
    
  <div className="App">
    {/* Вивод Блоков */}
  <Switch>
      <Route exact path="/" component = {Comp}></Route>
      </Switch>
      <Pagination pageNumber={pageNumber} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>

 </div>
 
 
  )
}
     export default App;
