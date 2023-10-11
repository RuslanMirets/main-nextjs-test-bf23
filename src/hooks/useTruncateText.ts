export const useTruncateText = (text: string, numberOfWords: number) => {
	const words = text.split(" ");

	const truncatedWords = words.slice(0, numberOfWords);

	const truncatedText = truncatedWords.join(" ");

	const finalText = truncatedText + "...";

	return finalText;
};
