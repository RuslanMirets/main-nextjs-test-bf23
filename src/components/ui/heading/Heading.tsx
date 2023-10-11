import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Heading.module.scss";

type Props = {
	center?: boolean;
};

const Heading: FC<PropsWithChildren<Props>> = ({ children, center }) => {
	return (
		<h1 className={classNames(styles.root, center && styles.center)}>
			{children}
		</h1>
	);
};

export default Heading;
