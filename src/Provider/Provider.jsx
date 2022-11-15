import React from "react";
import {getTodos} from "../API";

export const dataContext = React.createContext({})

const Provider = ({children}) => {
	const [data , setData] = React.useState(null)
	const [update , setUpdate] = React.useState(false)

	React.useEffect(() => {
		if(localStorage.getItem('accessToken')){
			getTodos()
				.then(res => setData(res.data))
		}
	}, [update])

	const value = React.useMemo(() => ({
		data,
		setUpdate
	}), [data, setUpdate])

	return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}

export default Provider;