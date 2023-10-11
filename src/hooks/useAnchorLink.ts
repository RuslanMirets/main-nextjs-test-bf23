export const useAnchorLink = () => {
	const anchorLink = (idElem: string) => {
		const elem = document.getElementById(idElem);
		const offset = 100;

		if (elem) {
			const top = elem.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: top - offset,
				behavior: "smooth",
			});
		}
	};

	return { anchorLink };
};
