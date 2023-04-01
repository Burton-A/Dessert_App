import classes from './MealsSummary.module.css';

const MealsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Delicious Desserts, Delivered To You!</h2>
			<p>
				Choose your favorite sweet from our broad selection of available treats and enjoy a
				delicious snack at home.
			</p>
			<p>
				All our meals are sweets with high-quality, all-natural ingredients, just-in-time and of
				course by experienced chefs!
			</p>
		</section>
	);
};

export default MealsSummary;
