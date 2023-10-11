import { useEffect } from "react";

const useBodyLock = (value: boolean) => {
	useEffect(() => {
		const body = document.body;

		if (value) {
			body.classList.add("lock");
		} else {
			body.classList.remove("lock");
		}

		return () => {
			body.classList.remove("lock");
		};
	}, [value]);
};

export default useBodyLock;
