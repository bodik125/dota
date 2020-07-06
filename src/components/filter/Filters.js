import React,{useEffect, useState , Component} from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event, {temp}) {
  //  temp = useState(this.state.value);
    alert(temp);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}


const Filters=({setLike,like, setPosts, allHeroes, setFilterRole})=>{
  const [temp, setTemp] = useState(0);
  const likes = ()=>{
    

    setPosts(JSON.parse(localStorage.getItem('chosen')));
  }
//Filter  
const filter_Atr_1 = (search)=>{
    setPosts(allHeroes.filter(el => el.primary_attr === search));
    // setFilterRole([]);
 }
 const filter_rols = (search_role)=>{
  setPosts(allHeroes.filter(el => el.roles[0] === search_role || el.roles[1] === search_role || el.roles[2] === search_role || el.roles[3] === search_role || el.roles[4] === search_role || el.roles[5] === search_role));
}

// const Search = ({temp})=>{
//   setPosts(allHeroes.filter(el => el.localized_name === {temp}));
//   setFilterRole([]);
// }


return (
<div className="filtr">

<div className="right_filtration">
<div className="filtration_block">
<div className="tittle_filt"></div>
<div onClick={ ()=>filter_Atr_1('int')} className="filter_by-intllegence">Intellegence</div>
<div onClick={ ()=>filter_Atr_1('str')} className="filter_by-strenght">Strenght</div>
<div onClick={ ()=>filter_Atr_1('agi')} className="filter_by-agility">Agility</div>
</div>
</div>
<div className="center_filtration">
<div className="filtration_block">
<div onClick={ ()=>likes()} className="filter_by-rols led">Избраное</div>
<div onClick={ ()=>filter_rols('Carry')} className="filter_by-rols">Carry</div>
<div onClick={ ()=>filter_rols('Disabler')} className="filter_by-rols">Disabler</div>
<div onClick={ ()=>filter_rols('Support')} className="filter_by-rols">Support</div>
<div onClick={ ()=>filter_rols('Initiator')} className="filter_by-rols">Initiator</div>
<div onClick={ ()=>filter_rols('Nuker')} className="filter_by-rols">Nuker</div>
<div onClick={ ()=>filter_rols('Durable')} className="filter_by-rols">Durable</div>
<div onClick={ ()=>filter_rols('Escape')} className="filter_by-rols">Escape</div>
<div onClick={ ()=>filter_rols('Initiator')} className="filter_by-rols">Initiator</div>
<div className="tittle_filt"></div>
</div>
</div>
<div className="left_filtration">
<div className="filtration_block">
<div onClick={()=>filter_rols()} className="filter_break">Отменить фильтри</div>
</div>
</div>
</div>
)
}
export default Filters;
