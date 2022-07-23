export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const priceToString = (price: number) => {
  return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};

export const imageDelivery = (id: string, variable: string) => {
  return `https://imagedelivery.net/zjmSN5Rcllx18PgI6OpEdQ/${id}/${variable}`;
};
