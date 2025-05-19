
const UserId = ({params}:{params:{id: string}})=>{
    const {id} = params
    return(
        <div>
            <p>L&apos;id de la section est : {id} </p>
        </div>
    )
}

export default UserId