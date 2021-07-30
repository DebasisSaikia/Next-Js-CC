import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const materialSheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => materialSheets.collect(<App {...props} />)
        })

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                materialSheets.getStyleElement()
            ]
        }
    }

    render() {
        return (
            <Html>
                <Head >
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" />
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