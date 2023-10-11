import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
	const ref = useRef<HTMLDivElement>(null);
	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
			callback();
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return ref;
};
export default useClickOutside;
