import Bday from "./Bday"
import Adds from "./Adds"
import UserInfo from "./UserInfo"
import UserMedia from "./UserMedia"

const RightMenu = ({userId}:{userId?:string}) => {
    return (
      <div className="flex flex-col gap-6">
         {userId ? (
        <>
            <UserInfo userId={userId}/>
            <UserMedia userId={userId}/>
        </>
      ) : null}
        <Bday/>
        <Adds size="md"/>
      </div>
    )
  }
  
  export default RightMenu
  