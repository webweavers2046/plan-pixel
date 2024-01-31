import Calender from "./home/Calender";
import MyTask from "./home/MyTask";
import TeamMembers from "./home/TeamMembers";
import TimeTruck from "./home/TimeTruck";

const Dashboard = () => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
      {/* colum 1 */}
      <div>
        <TimeTruck />
      </div>
      {/* colum 2 */}

      <div>
        <MyTask />
      </div>
      {/* colum 1 */}

      <div>
        <Calender />
        <TeamMembers />
      </div>
    </div>
  );
};


export default Dashboard;



