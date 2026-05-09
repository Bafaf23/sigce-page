import Icon from "@/components/atoms/Icon";
import Link from "next/link";

/**
 * Conjunto de enlaces con suporte visual que indica al usuario en que pagia esta.
 *
 * @componet
 * @param {object} props
 * @param {string} props.derecction
 * @param {string} props.label
 * @param {string} props.classNameIcon
 * @param {string} props.classNameLink
 * @param {boolean} props.active
 * @returns {JSX.Element}
 */

export default function NavLink({
  direcction,
  label,
  icon,
  classNameIcon,
  classNameLink,
  active = false,
}) {
  return (
    <Link
      href={direcction}
      className={`font-bold flex w-full items-center gap-1 p-2 text-gray-500/60 border border-transparent rounded-2xl transition-all ${active ? "bg-indigo-500/20 text-indigo-700" : ""} hover:text-gray-700/60`}
    >
      <Icon icon={icon} className={`text-xl ${classNameIcon}`}></Icon>
      <span className="whitespace-nowrap text-xl">{label}</span>
    </Link>
  );
}
