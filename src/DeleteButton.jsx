const DeleteButton = ({ user , deleteUser }) => {
    console.log(user);
    return <>
        <button className="deleteBtn" onClick={()=>deleteUser(user)} style={{marginTop:"10px", marginLeft:"5px"}}>Remove</button>
    </>
}

export default DeleteButton 