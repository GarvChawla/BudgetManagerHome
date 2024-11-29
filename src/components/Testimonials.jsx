import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 

const Testimonials = () => (
  <>
    
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
    <section className="dark:text-gray-100 ">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is the Budget Manager Software?
        </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">The Budget Manager is a simple tool that helps you track expenses, set budgets, and visualize your spending patterns through charts and graphs.
        </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I create an account?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Click on the "Sign Up" button on the start screen, enter your email address, create a password, and follow the prompts to set up your account. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I add a new expense?
        </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Once logged in,  fill in the required details (name,amount, budget), and save the entry.. </p>
			</details>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What file formats are available for data export?

        </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You can export your data in PDF and CSV formats for easy sharing and storage.
        </p>
			</details>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Can I create custom categories?

        </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, you can create custom categories by entering name and amount
        </p>
			</details>
		</div>
	</div>
</section>


<section>


    <Card className="mt-6 w-96">
      <CardBody className='bg-black text-white border rounded-sm border-white p-8 bg-black' >
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Customer Support
        </Typography>
        <Typography>
          Email - CustomerSupport@gap.com 
          </Typography>
          <Typography>
          Phone - 987654321
          </Typography>
      </CardBody>
     
    </Card>

</section>


  </>
);

export default Testimonials;
