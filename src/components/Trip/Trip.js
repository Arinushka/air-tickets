import './Trip.css';

export const Trip = () => {
  return (
    <div>
      <h3 className="trip__direction">Москва, ШЕРЕМЕТЬЕВО <span className="trip__span">(SVO)	&#8594; </span>ЛОНДОН, Лондон, Хитроу <span className="trip__span">(LHR)</span></h3>
      <div className="trip__wrapper">
        <p className="trip__time">20:40 <span className="trip__span">18 авг. вт </span></p>
        <p className="trip__time">&#128340; 14 ч 45 мин</p>
        <p className="trip__time"><span className="trip__span">19 авг. ср </span> 09:25</p>
      </div>
      <div className="trip__wrap">
        <hr />
        <p className="trip__transfer">1 пересадка</p>
      </div>
      <p className="trip__carrier">Рейс выполняет:</p>
      
    </div>
  );
}