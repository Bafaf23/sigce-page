"use client";
import Button from "@/components/atoms/Button";
import CardState from "@/components/atoms/CardState";
import Label from "@/components/atoms/Label";
import {
  faUserPlus,
  faStore,
  faCoins,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex-1 scroll-mt-30 overflow-hidden px-6 py-20"
    >
      {/* Decoración de fondo (Átomo de diseño) */}
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/4 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="max-w-9xl mx-10 flex flex-col items-center gap-12 md:flex-row">
        {/* Lado Izquierdo: Textos (Molécula) */}
        <div className="z-10 flex-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Label
              label={"Gestión Inteligente"}
              className="bg-cyan-500/10 text-cyan-400"
            ></Label>
            <Label
              label={"Un eco sistema completo para tu institución"}
              className="bg-amber-500/10 text-amber-400"
            ></Label>
          </div>
          <h1 className="mb-6 text-4xl leading-tight font-black text-indigo-600 md:text-6xl">
            Control de Estudios <br />
            <span className="text-cyan-500 underline decoration-cyan-500/30">
              Inteligente
            </span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-slate-400">
            Optimiza la inscripción, carga de notas y reportes académicos del
            centro de estudio con una plataforma rápida y segura.
          </p>

          {/* Acciones (Molécula de Botones) */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button
              classNameBtn={
                "bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 group shadow-lg shadow-cyan-500/20"
              }
              onClick={() => {
                window.location.href = "/enrollment";
              }}
              children={"Se parte de la innovación"}
              icon={faUserPlus}
            ></Button>
            <Button
              classNameBtn={
                "bg-indigo-800 hover:bg-indigo-700 text-slate-200 px-8 py-3 rounded-xl font-bold border border-indigo-700 transition-all flex items-center gap-2 z-50 relative"
              }
              children={"Ver planes"}
              icon={faCoins}
              type={"button"}
              onClick={() => {
                window.location.href = "#planes";
              }}
            ></Button>
          </div>
        </div>

        {/* Lado Derecho: Tarjetas de Estado (Organismo de previsualización) */}
        <div className="grid w-full flex-1 grid-cols-2 gap-4">
          <CardState
            icon={faUser}
            info={"5,240"}
            titel={"Usuarios Activos"}
          ></CardState>

          <CardState
            titel={"Instituciones Registradas"}
            info={"10"}
            icon={faStore}
          ></CardState>
        </div>
      </div>
    </section>
  );
}
