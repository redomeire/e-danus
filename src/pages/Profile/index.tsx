import { Helmet } from "react-helmet";
import UserLayout from "../../components/Layout/UserLayout";

const Profile = () => {
    return ( 
        <UserLayout>
            <Helmet>
                <title>Profil</title>
            </Helmet>
            <div className="rounded-lg bg-yellow-300 p-2">
                
            </div>
        </UserLayout>
     );
}
 
export default Profile;