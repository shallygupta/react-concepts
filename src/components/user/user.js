import { BiEdit } from "react-icons/bi";
export const User = ({ avatar }) => {
    const editHandler = () => {

    }
    return <div className="user">
        <img height="50px" width="50px"
            src={`https://avatars.dicebear.com/v2/avataaars/${avatar.username}.svg?options[mood][]=happy`}></img>
        <div>{avatar.name}
            <BiEdit onClick={editHandler} />
        </div></div>
}