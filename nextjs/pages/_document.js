import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-   scale=1" />
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.1/antd.min.css' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument