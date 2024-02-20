import CommonModal from "@/components/Common/CommonModal/CommonModal";
import { useState } from "react";
import Chat from "../Chat/Chat";

const Message = ({ openModal, setOpenModal }) => {
    const [message,setMessage] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        const newMessage = e.target.newMessage.value
     setMessage(newMessage)
    }
  return (
    <CommonModal openModal={openModal} setOpenModal={setOpenModal} heading="message">
{/* <Chat/> */}
    </CommonModal>
  );
};
export default Message;