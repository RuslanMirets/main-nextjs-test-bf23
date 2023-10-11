import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Title.module.scss";

type Props = {
	className?: string;
};

const Title: FC<PropsWithChildren<Props>> = ({ children, className }) => {
	return <h2 className={classNames(styles.root, className)}>{children}</h2>;
};

export default Title;
