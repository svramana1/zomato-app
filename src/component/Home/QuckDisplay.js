import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// export default class QuckDisplay extends Component {
//   render() {
//     return (
//         <div className="row mainCard">
//         <div className="card">
//             <div><img className="tileItem" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D" alt="breakfast" /></div>
//             <div>
//                 <h3 className="tileheading">Breakfast</h3>
//                 <p>Start your day with exclusive breakfast options</p>
//             </div>
//         </div>
//         <div className="card">
//             <div><img className="tileItem" src="https://plus.unsplash.com/premium_photo-1663091215026-81fd5e7653d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D" alt="lunch" /></div>
//             <div>
//                 <h3 className="tileheading">Lunch</h3>
//                 <p>Start your day with exclusive breakfast options</p>
//             </div>
//         </div>
//         <div className="card">
//             <div><img class="tileItem" src="https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBtZW51fGVufDB8fDB8fHww" alt="snacks" /></div>
//             <div>
//                 <h3 className="tileheading">Snacks</h3>
//                 <p>Start your day with exclusive breakfast options</p>
//             </div>
//         </div>
//         <div className="card">
//             <div><img className="tileItem" src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8fDA%3D" alt="dinner" /></div>
//             <div>
//                 <h3 className="tileheading">Dinner</h3>
//                 <p>Start your day with exclusive breakfast options</p>
//             </div>
//         </div>
//         <div className="card">
//             <div><img className="tileItem" src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D" alt="drinks" /></div>
//             <div>
//                 <h3 className="tileheading">Drinks</h3>
//                 <p>Start your day with exclusive breakfast options</p>
//             </div>
//         </div>
//         <div className="card">
//             <div><img className="tileItem" src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.webp?b=1&s=170667a&w=0&k=20&c=ae-29IvyAog_Bth2OhAWLvsIs_Ry7wY5wBgk3UfqvAM=" alt="nightlife" /></div>
//             <div>
//                 <h3 className="tileheading">Nightlife</h3>
//                 <p>Start your day with exclusive breakfast options</p>
//             </div>
//         </div>
//     </div>
//     )
//   }
// }


  export const QuickDisplay = (props) => {

    const listMeal = ({ mealData }) => {
        console.log(mealData)
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
                       <div className="card">
                    <div><img className="tileItem" src={item.meal_image} alt={item.mealtype} /></div>
                            <div>
                                <h3 className="tileheading">{item.mealtype}</h3>
                                <p>
                                    {item.content}
                                </p>
                            </div>
                </div>
                 </Link>
                ) 
            })
        }

    }
    return (
        <>
            <div className="mainCard">
                {listMeal(props)}
            </div>
        </>
    )

}

