import './Filters.css';
import { companies } from './../../utils/constans';

export const Filters = () => {
	return (
		<fieldset className="filters">
			<h3>Сортировать</h3>
			<p className="filters__option"><input className="filters__input" type="radio" name="filters-for-price-and-time" id="filters-for-price-up" /> - по возрастанию цены</p>
			<p className="filters__option"><input className="filters__input" type="radio" name="filters-for-price-and-time" /> - по убиванию цены</p>
			<p className="filters__option"><input className="filters__input" type="radio" name="filters-for-price-and-time" /> - по времени в пути</p>
			<h3>Фильтровать</h3>
			<p className="filters__option"><input className="filters__input" type="checkbox" name="filters-for-transfer" /> - 1 пересадка</p>
			<p className="filters__option"><input className="filters__input" type="checkbox" name="filters-for-transfer" /> - без пересадок</p>
			<h3>Цена</h3>
			<div>
				<label>От </label>
				<input className="filters__input filters__input_for_space" type="number" name="filters-for-airline" placeholder="0" />
			</div>
			<div>
				<label>До </label>
				<input className="filters__input" type="number" name="filters-for-airline" placeholder="10000" />
			</div>
			<h3>Авиакомпании</h3>
			{companies.map((company)=>{
				return <p className="filters__option"><input className="filters__input" type="checkbox" name="filters-for-airline" />{`${company.caption} от ${company.price}`}</p>
			})}
		</fieldset>
	);
}