import UseAuth from "../../../hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth ();
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi,welcome</span>
                {user?.displayName ? user.displayName :'back'}
            </h2>
        </div>
    );
};

export default UserHome;