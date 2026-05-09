"use client";

import Button from "@/components/atoms/Button";
import SigaceLogo from "@/components/atoms/SigaceLogo";
import NavLink from "@/components/molecules/NavLink";
import {
  faHouseUser,
  faUsers,
  faKey,
  faPlane,
  faRocket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="sshadow sticky top-0 z-100 flex flex-col items-center gap-5 border border-gray-100 bg-white p-6">
      <div className="flex w-full justify-between">
        <SigaceLogo className="text-slate-300"></SigaceLogo>
        <div className="flex items-center gap-3">
          <nav className="hidden gap-1 md:flex lg:flex">
            <NavLink
              icon={faHouseUser}
              label={"Inicio"}
              direcction={"#hero"}
            ></NavLink>
            <NavLink
              icon={faUsers}
              label={"Sobre el proyecto"}
              direcction={"#nosotros"}
            ></NavLink>
            <NavLink
              icon={faRocket}
              label={"Planes"}
              direcction={"#planes"}
            ></NavLink>
          </nav>
          <Button
            classNameBtn={
              "bg-cyan-600 hover:bg-cyan-500 text-white py-3 px-4 rounded-xl font-bold transition-all flex items-center gap-2 group cursor-pointer block w-full justify-center text-xl  md:flex lg:flex"
            }
            children={"ir al sistema"}
            icon={faRightToBracket}
          ></Button>
        </div>
      </div>
    </div>
  );
}
