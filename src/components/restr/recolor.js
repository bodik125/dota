import React,{useEffect, useState} from 'react';

const recolor =(primary_attr)=>{
    
    if(primary_attr==="str"){
      return "colorStrenght"
    }
    if(primary_attr==="int"){
      return "colorIntellegence"

    }    
    if(primary_attr==="agi"){
      return "colorAgility"

    }
  return recolor
    
  }


export default recolor;
