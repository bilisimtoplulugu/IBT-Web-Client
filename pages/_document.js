import Document, {Html, Head, Main, NextScript} from 'next/document';
class MyDocument extends Document {
 
  render() {
    return (
      <Html lang="tr">
        <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
