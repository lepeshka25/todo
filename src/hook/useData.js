import React from "react";
import {dataContext} from "../Provider/Provider";

export const useData = () => {
	return React.useContext(dataContext)
}