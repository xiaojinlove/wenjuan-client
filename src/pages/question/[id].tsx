import Head from "next/head"

type PropsType = {
  id: string
}

export default function Question(props: PropsType) {
  return <>
      <Head>
        <title>Question</title>
        <meta name="description" content="question page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Question page</h1>
        <p>{props.id}</p>
      </main>
  </>
}

export async function getServerSideProps(context: any) {
  const { id = '' } = context.params

  return {
    props: {
      id,
    }
  }
}
