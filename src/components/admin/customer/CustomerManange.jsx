
import UserListComponent from "./UserList/UserListComponent.jsx";

const CutomerManage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div>
                    <UserListComponent/>
                </div>
            </div>
        </div>
    );
};

export default CutomerManage;