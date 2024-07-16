import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../component/core/GlobalContext';
import ItemInfo from '../component/shared/itemInfo';

const Home = () => {
    const {days, setDays, articleList,setarticleList,articleDataServices} = useContext(GlobalContext);
    const [currentDay, setCurrentDay] = useState(days);

    const init = async (day) => {
        const { payload, status } = await articleDataServices.getarticleList(day);
        if(status === 200){
            setarticleList(payload.results);
        }        
    }

    const onClickDays = (day) => {
        setCurrentDay(day)
        setDays(day); 
        init(day);       
    }
   
    useEffect(()=> {
        init(currentDay);
    },[currentDay]);
    
    if(!articleList){
        return <div/>
    }

    return (
        <div className='container mb-4'>
            <div className='d-flex justify-content-end'>
                <button className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Day {currentDay}
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" onClick={()=>onClickDays(1)}>1</a></li>
                    <li><a className="dropdown-item" onClick={()=>onClickDays(7)}>7</a></li>
                    <li><a className="dropdown-item" onClick={()=>onClickDays(30)}>30</a></li>
                </ul>
            </div>
            
            {
              articleList.map((article,index)=>{
                return(<ItemInfo articleData = {article} index={index} key={index}/>)
              })  
            }            
        </div>
    );
}

export default Home;