import { useContext } from 'react';
import { Base } from './base';

export default function Joke() {

    const { list } = useContext(Base);

   const items = list.map(j => j.type === 'single' ? 
            <div key={j.id} value={j.id}>
                <p>{j.joke}</p>
            </div> 
            :  
            <div key={j.id} value={j.id}>
                <p> - {j.setup}</p>
                <p> - {j.delivery}</p>
            </div>);

    const refreshPage = _ =>{ 
        window.location.reload(); 
    };

    return (
        <div className="box">
            <div className="container">
                {
                items.find(joke => joke.id === list.id)
                }
                <div className="buttons">
                    <button type="button" className="btn btn-outline-secondary" onClick={refreshPage}>Return</button>
                </div>
                
            </div>
            
        </div>
    )


}