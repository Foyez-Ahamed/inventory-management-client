import useAuth from "../../../hooks/useAuth";

const SystemAdmin = () => {
  const { user } = useAuth();

  return (
    <div>
      <div
        className="mt-10 text-center"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex justify-center items-center">
        <img
          className="w-[120px] h-[120px] rounded-full"
          src={user?.photoURL}
          alt=""
        />
        </div>
        <h1>{user?.displayName}</h1>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default SystemAdmin;
