import Card from "./Card";

function Car(card) {

    return card.myCars.map(

        (car) => {
            return <Card myCar={car} key={card.isbn}></Card>
        }
    );
}

export default Car;