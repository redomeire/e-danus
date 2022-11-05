import React from "react";

interface Props {
    children : React.ReactNode,
    type: string
}

const Typography = ({children, type}: Props) => {
    return ( 
        <p>{children}</p>
     );
}
 
export default Typography;