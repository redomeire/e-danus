import React from "react";
import Button from "../Button";

const datas = [
    {
        name: 'Belum bayar'
    },
    {
        name: 'Dikemas'
    },
    {
        name: 'Diantar'
    },
    {
        name: 'Selesai'
    },
    {
        name: 'Dibatalkan'
    },
]

interface Props {
    setSelectedData: Function
}

const Tabs = ({setSelectedData}: Props) => {
    const [isSelected, setIsSelected] = React.useState(datas[0].name);

    React.useEffect(() => {
        setSelectedData(isSelected);
    }, [isSelected, setSelectedData])

    return ( 
        <div className="flex items-center">
            {
                datas.map((data, index) => (
                    <Button 
                    color="primary"
                    onClick={() => { 
                        setIsSelected(data.name)
                        setSelectedData(data.name)
                     }}
                    variant={isSelected === data.name ? 'contained' : 'outlined'}
                    key={index}
                    className='mx-1 text-sm font-semibold'
                    >{data.name}</Button>
                ))
            }
        </div>
     );
}
 
export default Tabs;