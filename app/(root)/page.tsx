import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Lirika", lastName: "Bulliqi", email:"contact@lirika.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
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
