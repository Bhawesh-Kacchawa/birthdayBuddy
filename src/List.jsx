import DeleteButton from "./DeleteButton"

const List = ({user, deleteUser}) => {
    
    return <>
        <article className="person" >
            <img src={user.image} alt="image" className="img" />
            <div>
                <h4>{user.name}</h4>
                <p>{user.age}</p>
                <DeleteButton user = {user} deleteUser={deleteUser} />
            </div>
        </article>
    </>
}

export default List 