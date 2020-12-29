
import "./List.css"

function List({list,setList}){
    const deleteHandler=(key)=>{
      const newList =  list.filter((items)=>{
          return items.key !=key;;
      });
      setList(newList);
    };

    return(
     <div>
         {list.map(itemsobj=>{
             return <div className="returned-items">
                  <p className="items-list">{itemsobj.item}</p>
                  <button onClick={()=>deleteHandler(itemsobj.key)}>X</button>
                  </div>                       
         })}
          
     </div> 
    )
};


export default List;