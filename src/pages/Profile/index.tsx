import { Helmet } from "react-helmet";
import UserLayout from "../../components/Layout/UserLayout";

const Profile = () => {
    return ( 
        <UserLayout>
            <Helmet>
                <title>Profil</title>
            </Helmet>
        </UserLayout>
     );
}
 
export default Profile;