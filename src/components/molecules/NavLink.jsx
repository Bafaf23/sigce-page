import Icon from "@/components/atoms/Icon";
import Link from "next/link";

/**
 * Enlace de navegación con icono para el encabezado.
 *
 * @component
 * @param {object} props
 * @param {string} props.href - Ruta o ancla (ej. "#planes").
 * @param {string} props.label - Texto visible.
 * @param {object} props.icon - Icono Font Awesome.
 * @param {string} [props.classNameIcon] - Clases del icono.
 * @param {string} [props.classNameLink] - Clases adicionales del enlace.
 * @param {boolean} [props.active] - Estado activo.
 * @returns {JSX.Element}
 */

export default function NavLink({
  href,
  label,
  icon,
  classNameIcon,
  classNameLink = "",
  active = false,
}) {
  return (
    <Link
      href={href}
      className={`font-bold flex w-full items-center gap-1 p-2 text-gray-500/60 border border-transparent rounded-2xl transition-all hover:text-gray-700/60 ${active ? "bg-indigo-500/20 text-indigo-700" : ""} ${classNameLink}`}
    >
      <Icon icon={icon} className={`text-xl ${classNameIcon ?? ""}`} />
      <span className="whitespace-nowrap text-xl">{label}</span>
    </Link>
  );
}
