import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api';


export interface IBrokerProduct {
	acquisitionDate: string;
	bankId: string;
	description: string;
	dueDate: string;
	identity: string;
	productType: string;
	profitability: number;
	risk: number;
	type: string;
	value: number;
	volumn: number;
}

export interface IBrokerProductAggregator {
	broker: string;
	investorProfile: string;
	products: IBrokerProduct[];
}

export interface IInvestimentsState {
	getProducts: () => Promise<void>;
	loading: boolean;
	products: IBrokerProductAggregator[];
}

const INITIAL_STATE: IInvestimentsState = {
	getProducts: async () => void 0,
	loading: false,
	products: [],
}

export const InvestmentsContext = createContext(INITIAL_STATE)

export function InvestmentsProvider({ children }: React.ComponentProps<any>) {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	const getProducts = useCallback(async () => {
		setLoading(true); 
		try {
			const { data } = await api.get('/brokers', {
				headers: {
					private: true,
				}
			});			

			setProducts(
				data
			);
		}catch(e) {
			console.log(e);
		}finally {
			setLoading(false);
		}
	}, []);

  return <InvestmentsContext.Provider value={{
		getProducts,
		loading,
		products
	}}>
		{children}
	</InvestmentsContext.Provider>
}
