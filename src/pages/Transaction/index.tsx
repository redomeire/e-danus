import { Helmet } from "react-helmet";
import CardTransaction from "../../components/Card/CardTransaction";
import UserLayout from "../../components/Layout/UserLayout";
import Tabs from "../../components/Tabs";

const Transaction = () => {
    return ( 
        <UserLayout>
            <Helmet>
                <title>Transaksi</title>
            </Helmet>
            <Tabs/>
            <div className="mt-10">
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
            </div>
        </UserLayout>
     );
}
 
export default Transaction;