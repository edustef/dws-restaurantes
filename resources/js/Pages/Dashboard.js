import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";

const Dashboard = () => {
  let foo = "React";

  return <div>
    <div className="m-auto">
      <h2 className="text-5xl">Dashboard.</h2>
      <h2 className="italic text-sm">
        The middleware between you and your favorite food.
      </h2>
    </div>
  </div>;
};

Dashboard.layout = (page) => <DefaultLayout title="Dashboard" children={page} />;
export default Dashboard;