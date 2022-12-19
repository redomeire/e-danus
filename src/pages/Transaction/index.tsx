import React from "react";
import { Helmet } from "react-helmet";
import CardTransaction from "../../components/Card/CardTransaction";
import UserLayout from "../../components/Layout/UserLayout";
import Tabs from "../../components/Tabs";

const transactionDatas = [
    {
        type: 'Belum bayar'
    },
    {
        type: 'Dikemas'
    },
    {
        type: 'Belum bayar'
    },
    {
        type: 'Diantar'
    },
    {
        type: 'Selesai'
    },
    {
        type: 'Diantar'
    },
    {
        type: 'Diantar'
    },
]

const Transaction = () => {
    const [selectedData, setSelectedData] = React.useState('');

    return ( 
        <UserLayout>
            <Helmet>
                <title>Transaksi</title>
            </Helmet>
            <Tabs setSelectedData={setSelectedData}/>
            <div className="mt-10">
                {
                    transactionDatas.filter((data, index) => {
                        if(selectedData === data.type)
                            return data
                            else return null
                    }).map((data, index) => {
                        return(
                            <CardTransaction key={index} type={data.type} />
                        );
                    })
                }
            </div>
        </UserLayout>
     );
}
 
export default Transaction;