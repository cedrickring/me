import clsx from "clsx";
import styles from "../../styles/Card.module.scss";
import { JSXElementConstructor, ReactNode } from "react";

type Props = {
  notHoveredClassName?: string;
  notHoveredContainerClassName?: string;
  icon: JSXElementConstructor<{ className: string }>;
  iconClassName?: string;
  name: string;
  children: ReactNode;
};

export default function Card({
  children,
  icon: Icon,
  name,
  notHoveredContainerClassName = "",
  notHoveredClassName = "",
  iconClassName = "h-12",
}: Props) {
  return (
    <div className={clsx(styles.fadeContainer, "text-white relative")} style={{ width: "502px", height: "330px" }}>
      <div
        className={clsx(styles.fadeElement, styles.fadeOut, "absolute top-0 left-0 flex", notHoveredContainerClassName)}
        style={{ width: "335px", height: "220px" }}
      >
        <div className={notHoveredClassName}>
          <Icon className={iconClassName} />
          <h1 className="font-thin text-xl uppercase">{name}</h1>
        </div>
      </div>
      <div className={clsx(styles.fadeElement, styles.fadeIn, "w-full h-full p-4 absolute top-0 left-0 flex flex-row")}>
        <div className="flex flex-col items-center uppercase pt-2">
          <Icon className="h-8 block" />
          <h1 className="mt-4 font-thin text-xl tracking-wider vertical-text block">{name}</h1>
        </div>
        <div className="ml-3 mt-1.5 w-full h-full">{children}</div>
      </div>
    </div>
  );
}
