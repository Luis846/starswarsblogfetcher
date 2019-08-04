import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Demo } from "./demo.js";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Demo />
			</div>
		);
	}
}
