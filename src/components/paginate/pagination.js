import React,{useEffect, useState} from 'react';



  
// PaGinachiya
const pageNumber = [];

const paginate = (pageNumber, setCurrentPage)=> {setCurrentPage(pageNumber)};
const Pagination =({postsPerPage,totalPosts})=>{
  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i);
  }
  return(
    <ul className="pagination">
      {pageNumber.map(number =>(
        <li  key={number} className="page-item">
          <a onClick={()=> paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))};
    </ul>
  )
  

}

 export default  Paginat;