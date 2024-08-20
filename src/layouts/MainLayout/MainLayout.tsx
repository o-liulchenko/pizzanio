import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "../../hooks";
import { Footer, Header_lg, Header_sm } from "../../components";

const MainLayout: FC = () => {
  let [width] = useWindowSize();

  return (
    <div className="min-h-[100dvh] grid grid-rows-layout font-body bg-slate-50 text-slate-800">
      {width <= 768 ? <Header_sm /> : <Header_lg />}

      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
