import { useCart } from "@/app/context/CartContext"; 
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckOutComponent() {
  const { cartItems } = useCart();
  const {  handleSubmit } = useForm();

  console.log(cartItems)

  const onSubmit = async (data: any) => {
      try {
          const response = await fetch("/api/checkout", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ addCart: cartItems, billingDetails: data }),
            }) ;
        
            const session = await response.json();
            console.log("sessions:",session)
      if (session.url) {
        window.location.href = session.url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input {...register("email")} placeholder="Email" required /> */}
      <button type="submit">Proceed to Payment</button>
    </form>
  );
}
