import './Filters.css';
import { companies } from './../../utils/constans';
import React from 'react';

export const Filters = (props) => {
	const [valueStart, setValueStart] = React.useState();
	const [valueEnd, setValueEnd] = React.useState();

	const handleValueStart = (e) => {
		setValueStart(e.target.value)
	}

	const handleValueEnd = (e) => {
		setValueEnd(e.target.value)
	}

	const sortByPrice = () => {
		props.filterByPrice(valueStart, valueEnd)
	}

	React.useEffect(() => {
		if (valueStart && valueEnd) {
			const timeout = setTimeout(sortByPrice, 1000);
			return () => clearTimeout(timeout)
		}
	}, [valueStart, valueEnd])

	return (
		<fieldset className="filters">
			<h3>Сортировать</h3>
			<p className="filters__option"><input onChange={props.filterByAscendingPrice} className="filters__input" type="radio" name="filters-for-price-and-time" id="filters-for-price-up" /> - по возрастанию цены</p>
			<p className="filters__option"><input onChange={props.filterByDescendingPrice} className="filters__input" type="radio" name="filters-for-price-and-time" /> - по убыванию цены</p>
			<p className="filters__option"><input onChange={props.filterByTravelTime} className="filters__input" type="radio" name="filters-for-price-and-time" /> - по времени в пути</p>
			<h3>Фильтровать</h3>
			<p className="filters__option"><input onChange={props.sortByOneDirection} className="filters__input" type="radio" name="filters-for-transfer" /> - 1 пересадка</p>
			<p className="filters__option"><input onChange={props.sortByDirect} className="filters__input" type="radio" name="filters-for-transfer" /> - без пересадок</p>
			<h3>Цена</h3>
			<div>
				<label>От </label>
				<input value={valueStart} onChange={handleValueStart} className="filters__input filters__input_for_space" type="number" name="filters-for-airline" placeholder="0" />
			</div>
			<div>
				<label>До </label>
				<input value={valueEnd} onChange={handleValueEnd} className="filters__input" type="number" name="filters-for-airline" placeholder="10000" />
			</div>
			<h3>Авиакомпании</h3>
			{companies.map((company) => {
				return <div className="filters__wrapper"><p className="filters__option filters__option_for_reduction"><input className="filters__input" type="checkbox" name="filters-for-airline" />{` ${company.caption}`}</p><span>от {company.price}</span></div>
			})}
		</fieldset>
	);
}