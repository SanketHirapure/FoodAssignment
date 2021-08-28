import classes from './AvailableMeals.module.css'
import MealItem from './Mealitem/Mealitem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
   
      name: 'McSpicy Paneer + American Cheese Supreme + Mc Veggie + Veg Maharaja +  Fries (L) ',
      description: 'Stay home,stary safe & share a meal-McSpicy Paneer + American Cheese Supreme + Mc Veggie + Veg Maharaja +  Fries (L) ',
      price: 857,
    },
    {
      id: 'm2',
      name: '2 McVeggie + 2 American Cheese Supreme Veg + 2 Fries(L) ',
      description: 'The combo of favourite! Get 2 McVeggie + 2 American Cheese Supreme Veg + 2 Fries (L)',
      price: 165,
    },
    {
      id: 'm3',
      name: '2 McSpicy Chicken + McNuggets 20 Pcs + Fries(L) + Coke(M)',
      description: 'American, raw, meaty',
      price: 628,
      
    }
  ];

  const Availablemeals =() =>{
      const mealslist = DUMMY_MEALS.map(meal => 
      <MealItem id ={meal.id}
                key={meal.id}
                name={meal.name}
                price={meal.price}
                description={meal.description}
                
               
      ></MealItem>
      )
    
      return(<section className={classes.meals}>
        <Card>
        
          <ul>{mealslist}</ul>
    
          </Card>
      </section>)
  }

  export default Availablemeals;