

const pizzaData = [
    {
        name:"Extraveg",
        ingrdients: "Bread with Italian Olive oi and rosemary",
        price: 6,
        photoName: "public/PizzaImages/extraveg.jpg",
        soldOut: false,
    },
    {
        name:"margheritta",
        ingrdients: "Bread with Italian Olive oi and rosemary",
        price: 1,
        photoName: "PizzaImages/margheritta.jpg",
        soldOut: false,
    },
    {
        name:"pepperoni",
        ingrdients: "Bread with Italian Olive oi and rosemary",
        price: 60,
        photoName: "PizzaImages/pepperoni.jpg",
        soldOut: false,
    },
    {
        name:"pineapple",
        ingrdients: "Bread with Italian Olive oi and rosemary",
        price: 62,
        photoName: "PizzaImages/pineapple.jpg",
        soldOut: false,
    },
    {
        name:"pizzatart",
        ingrdients: "Bread with Italian Olive oi and rosemary",
        price: 61,
        photoName: "PizzaImages/pizzatart.jpg",
        soldOut: false,
    },
]

function App(){
    return (
        <main className="menu">
            <h2>our menu</h2>
            <div>
                {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} />
                ))}
            </div>
        </main>
        
        // <Pizza pizzaObj={pizza}/>
    );
}

function Pizza(props){
    console.log(props)
    return (
        <div className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingrdients}</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </div>
    );
}

export default App;