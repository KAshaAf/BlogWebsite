import '../styles/MetaInfo.css';

function MetaInfo({category, tags}){
    return (
       <div className='meta-info'>
        Categories:{category.map( cat => (<span>{cat.name}</span>))}
        Tags: <span>{tags + ""}</span>
       </div>
      );
}

export default MetaInfo;