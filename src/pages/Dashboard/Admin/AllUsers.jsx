import { MdEmail } from "react-icons/md";
import useAllUsers from "../../../hooks/useAllUsers";


const AllUsers = () => {

    const [allUsers] = useAllUsers();

    return (
        <div>

            
      <section className="mt-10">
        <h1 className="text-xl font-bold text-[#B68C5A]">Total Users : {allUsers?.length}</h1>

        <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#BB8506] text-white font-bold">
              <tr>
            
                <th>User Name</th>
                <th>User Email</th>
                <th>Shop Name</th>
                <th>Role</th>
                <th>Promotional Email</th>

              </tr>
            </thead>

            <tbody>
              {allUsers?.map((user) => (
                <tr key={user?._id}>
                
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {user?.name}
                    </span>
                  </td>

                  <td>{user?.email}</td>

                  <td>{user?.shopName}</td>

                  <td className={`font-bold ${user?.role === 'manager' ? 'text-[#BB8506]' : 'text-green-600'}`}>{user?.role}</td>



                  <th>
                    <p className="text-blue-500 cursor-pointer flex justify-center items-center gap-2">Check Mail <MdEmail className="text-xl"></MdEmail></p>
                  </th>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      </section>
            
        </div>
    );
};

export default AllUsers;