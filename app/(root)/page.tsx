import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser()
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext=" Mnagae ur acccount gratly"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={3292.65}
          />
        </header>
        recect transactions
      </div>
      <RightSidebar
      user={loggedIn}
      transacations={[]}
      banks={[{currentBalance:123.43},{currentBalance:123.43}]}

      />
    </section>
  );
};

export default Home;
