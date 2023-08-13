import { useRouteError }  from 'react-router-dom'
 

const Error = ()=>{
    const err = useRouteError()
    console.log(err);
    return(
        <>
           <div style={{ padding: '5rem' , alignContent : 'center' , textAlign : 'center'  }} >
           <img src="https://testbook.com/assets/img/error/page-note-found.png" alt="" style={{width:'100%' , height: '20rem' }} />
        
        <h1>Opps !!</h1>
        <h3>Something went wrong </h3>
        <h3> {err.statusText} </h3>
        </div>
        </>
    )
}

export default Error