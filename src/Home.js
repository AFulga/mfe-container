import React from "react";
import { Route } from "react-router-dom";
import "./Home.css";
import Movie1 from "./Movie1";
import Movie2 from "./Movie2";
import Nav from "./Nav";

export default function Home(props) {
	return (
		<>
			<div className='main-container'>
				<div>
					<Nav />
				</div>
				<div>
					<Route path='/movie-1'>
						<Movie1 />
					</Route>
					<Route path='/movie-2'>
						<Movie2 />
					</Route>
				</div>
			</div>
		</>
	);
}
