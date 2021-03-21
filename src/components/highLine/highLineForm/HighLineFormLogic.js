import { useState } from "react";

const HighLineFormLogic = (onSubmit) => {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ roomNumber, setRoomNumber ] = useState("");
    const [ floor, setFloor ] = useState("");
    const [ phone, setPhone ] = useState("");
    const onClickSubmit = e => {
        e.preventDefault();
        const body = {
            name,
            email,
            phone,
            message: '',
            city: `HighLine, apartment:${ roomNumber }, floor:${ floor }`
        }
        onSubmit(body);
    }
    return {
        onClickSubmit,
        name,
        setName,
        email,
        setEmail,
        roomNumber,
        setRoomNumber,
        floor,
        setFloor,
        phone,
        setPhone
    };
}
export default HighLineFormLogic;