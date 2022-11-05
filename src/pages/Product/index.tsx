import { Helmet } from "react-helmet";
import UserLayout from "../../components/Layout/UserLayout";

const Product = () => {
    return ( 
        <UserLayout>
            <Helmet>
                <title>Product</title>
            </Helmet>
        </UserLayout>
     );
}
 
export default Product;