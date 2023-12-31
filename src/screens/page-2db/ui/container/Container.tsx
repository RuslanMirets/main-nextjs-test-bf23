import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={styles.root}>{children}</div>;
};

export default Container;
