export const Trip = () => {
  return (
    <div className="trip">
      <div className="trip__direction">Москва, ШЕРЕМЕТЬЕВО<span>(SVO)	&#8594; </span>ЛОНДОН, Лондон, Хитроу <span>(LHR)</span></div>
      <div>
        <p className="trip__time">20:40 <span className="trip__span">18 авг. вт</span></p>
        <p className="trip__time">&#128340; 14 ч 45 мин</p>
        <p className="trip__time"><span className="trip__span">19 авг. ср</span> 09:25</p>
      </div>
      <p className="trip__transfer">1 пересадка</p>
      <p className="trip__carrier">Рейс выполняет:</p>
    </div>
  );
}