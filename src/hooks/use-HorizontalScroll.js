import { useEffect, useRef } from "react";

const useHorizontalScroll = () => {
	const elementRef = useRef();
	useEffect(() => {
		const eleRefCurrent = elementRef.current;
		const onWheel = (event) => {
			if (event.deltaY === 0) {
				return;
			}
			event.preventDefault();
			eleRefCurrent.scrollTo({
				left: eleRefCurrent.scrollLeft + event.deltaY,
				behavior: "smooth",
			});
		};
		eleRefCurrent.addEventListener("wheel", onWheel);
		return () => {
			return eleRefCurrent.removeEventListener("wheel", onWheel);
		};
	}, []);
	return elementRef;
};
export default useHorizontalScroll;
