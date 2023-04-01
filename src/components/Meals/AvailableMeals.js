import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Cookies',
		description: 'Finest chocolate chip cookies',
		price: 15.99,
	},
	{
		id: 'm2',
		name: 'Ice Cream',
		description: 'Savory and sweet!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Cinnamon Sticks',
		description: 'Delicious, soft, and buttery',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Tarts',
		description: 'All natural speacialty tarts',
		price: 18.99,
	},
	{
		id: 'm5',
		name: 'Personal Cake',
		description: 'Choose from a variety of mini cakes!',
		price: 8.25,
	},
	{
		id: 'm6',
		name: 'Pie',
		description: 'Our pies change daily get them while you can!',
		price: 10.5,
	},
];
const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
