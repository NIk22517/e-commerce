import { useRouter } from "next/router";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import formatMoney from "../lib/formateMoney";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  console.log(orders, user, orders.receipt_email);
  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders?.map((order) => {
            return (
              <Order key={order.id}>
                <h1>Order Number: {order.id}</h1>
                <h2>Amount:{formatMoney(order.amount)}</h2>
                <h2>Receipt Email: {user.email}</h2>
              </Order>
            );
          })}
        </div>
        <LogOutButton onClick={() => route.push("/api/auth/logout")}>
          Logout
        </LogOutButton>
      </div>
    )
  );
}

const Order = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
  }

  @media (max-width: 676px) {
    flex-direction: column;
    padding: 1rem;

    h1,
    h2 {
      font-size: 0.8rem;
    }
  }
`;

const LogOutButton = styled.button`
  background: var(--primary);
  padding: 1rem 2rem;
  width: 100%;
  color: white;
  margin-top: 2rem;
  cursor: pointer;
  border: none;
  margin-bottom: 2rem;
`;
