import { useState } from 'react';
import { highLine } from "./TextBlock";

const HighLineLogic = () => {
    const [doneMessage,setDoneMessage]=useState(undefined);
    const onSubmit = (body) => {
        fetch(
            'https://gpleadsdb.greenpointcloud.info/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        ).then(() => setDoneMessage(highLine.submitMessage)
        ).catch(() => setDoneMessage(highLine.errorMessage));
    }

    return { onSubmit,doneMessage };
}
export default HighLineLogic;