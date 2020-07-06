
import React,{useEffect, useState} from 'react';

const rename =(primary_attr)=>{
    
    if(primary_attr==="str"){
      return "Strenght"
    }
    if(primary_attr==="int"){
      return "Intellegence"

    }    
    if(primary_attr==="agi"){
      return "Agility"

    }
  return rename

  }

export default rename;