import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <style>{bodyStyles}</style>
    </Head>
    <img width='112' src='/static/next.png' alt='next.js' />
  </div>
)
const bodyStyles = `
  html, body {
    height: 100%
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`