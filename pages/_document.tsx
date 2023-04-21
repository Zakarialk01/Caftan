import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' /> 
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Sacramento" rel="stylesheet" />

      <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
