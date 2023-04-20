// import { Component } from "react"; 
import Card from '../card/card.component';
import './card-list.styles.css';


const CardList = ({monsters}) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return (
                <Card monster={monster} />
        )})}
    </div>
);


// class CardList extends Component {

//     render() {

//         const { monsters } = this.props;

//         return(
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     // const { name, id, email } = monster;

//                     return (
//                         <Card monster={monster} />
//                     // <div className="card-container" key={id}>
//                     //     <img 
//                     //         alt={`monster ${name}`} 
//                     //         src={`https://robohash.org/${id}?set=set2&size=180x180`}>
//                     //     </img>
//                     //     <h2>{name}</h2> 
//                     //     <p>{email}</p>
//                     // </div>
//                 )})}
//                 {/* <p>I am the card-list component</p> */}
//             </div>
//         );

//                 {/* {filteredMonsters.map((monster) => {
//                     return (
//                     <p key={monster.id}>{monster.name}</p>
//                     );
//                 })}
//                 <p>I am the card-list component</p> */}
            
//     }

// }

export default CardList;