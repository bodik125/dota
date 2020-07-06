// import React,{useEffect, useState , Component} from 'react';



//     class NameForm extends React.Component {
//       constructor(props) {
//         super(props);
//         this.state = {value: ''};
    
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
//       handleChange(event) {
//         this.setState({value: event.target.value});
//       }
    
//       handleSubmit(event , temp) {
//        const temp =  this.state.value;
//         setPosts(allHeroes.filter(el => el.localized_name === temp));
//         setFilterRole([]);
  
//         alert(temp);
//         event.preventDefault();
//       }
    
//       render() {
//         return (
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Имя:
//               <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             <input type="submit" value="Отправить" />
//           </form>
//         );
//       }
//     }
//     const Search = ( {setPosts, allHeroes, setFilterRole,temp})=>{
//       setPosts(allHeroes.filter(el => el.localized_name === temp));
//       setFilterRole([]);
//    }



// export default Search
