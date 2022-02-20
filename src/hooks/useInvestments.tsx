import { useContext } from "react";
import { InvestmentsContext } from "../contexts/Investments";

export function useInvestments() {
	const context = useContext(InvestmentsContext);

	if(!context) {
		throw new Error("Component must be on investments context!!");
	}

	return context;
}