import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Include the Braintree Drop-in UI script here */}
        <script async src="https://js.braintreegateway.com/web/dropin/1.39.0/js/dropin.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
