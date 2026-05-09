import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Label from "@/components/atoms/Label";
import SigaceLogo from "@/components/atoms/SigaceLogo";
import {
  faInstagramSquare,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Fotter() {
  const developer = [
    {
      development: "Bryant Facenda",
      social: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/bafaf03",
          icon: faInstagramSquare,
          className: "text-pink-500 bg-purple-500/50",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/bryant-facenda-a078ab279/",
          icon: faLinkedin,
          className: "text-cyan-500 bg-blue-600/30",
        },
        {
          name: "Whatsapp",
          url: "https://w.app/p945hj",
          icon: faWhatsapp,
          className: "text-green-500 bg-green-500/40",
        },
      ],
    },
  ];

  return (
    <footer className="flex flex-col gap-2 bg-indigo-900 px-4 py-3">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <SigaceLogo className="text-slate-100" />
        <hr className="hidden h-10 border border-amber-500 md:block" />
        <div className="flex items-center gap-2 ">
          <Link href="https://instagram.com/sigace">
            <Icon
              icon={faInstagram}
              className=" text-slate-100 rounded-2xl w-10 h-10 p-1 hover:bg-pink-600/50 transition-all text-2xl"
            />
          </Link>
          <Link href="https://linkedin.com/in/sigace">
            <Icon
              icon={faLinkedin}
              className=" text-slate-100 rounded-2xl w-10 h-10 p-1 hover:bg-blue-600/50 transition-all text-2xl"
            />
          </Link>
          <Link href="https://whatsapp.com/sigace">
            <Icon
              icon={faWhatsapp}
              className=" text-slate-100 rounded-2xl w-10 h-10 p-1 hover:bg-green-600/50 transition-all text-2xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="z-10 text-2xl text-gray-300/50 italic">
          "Un ser sin estudios es un ser incompleto."
        </p>
        <Label
          label={"Simon Bolivar"}
          className="bg-amber-500/50 text-amber-500"
        ></Label>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-[13px] text-gray-400 italic">
          Desarrollado por:{" "}
          {developer.map((developer) => developer.development).join(", ")}
          todos los derechos reservados &copy;
          {new Date().getFullYear()}
        </p>
        <div className="flex gap-2">
          {developer.map((developer) =>
            developer.social.map((social, index) => (
              <Button
                key={index}
                icon={social.icon}
                classNameBtn={`rounded-2xl p-1 text-xl ${social.className}`}
              ></Button>
            )),
          )}
        </div>
      </div>
    </footer>
  );
}
