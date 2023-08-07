export function MonthlySubscribtionObject(snapToken, amount, order_id = "",paymentType = 'credit_card', customerDetails = { "first_name": "John", "email": "johndoe@email.com", "last_name": "Doe", "phone": "+62812345678"  }, description = '') {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const FullYear = date.getFullYear();
  const Month = (date.getMonth() + 1) < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  const DateNow = (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());
  const Hours = (date.getHours() < 9 ? '0' + date.getHours() : date.getHours());
  const Minutes = (date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes());
  const Seconds = (date.getSeconds() < 9 ? '0' + date.getSeconds() : date.getSeconds());

  return {
      "name": "PENA_MONTHLY_SUBSCRIPTION",
      "amount": amount,
      "currency": "IDR",
      "payment_type": paymentType,
      "token": snapToken,
      "schedule": {
        "interval": 1,
        "interval_unit": "month",
        "max_interval": 12,
        "start_time":  `${FullYear}-${Month}-${DateNow} ${Hours}:${Minutes}:${Seconds} +0700`
      },
      "customer_details": customerDetails,
      "metadata": {
          "description": description
      },
      "transaction_details": {
          "order_id": order_id,
          "gross_amount": amount,
      },
  }
}