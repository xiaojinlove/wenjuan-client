import QuestionInput from "@/components/QuestionComponents/QuestionInput"
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio"
import Head from "next/head"
import styles from '../../styles/Question.module.scss'

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
        <form>
          <input type="hidden" name="questionId" defaultValue={props.id} />
          <div className={styles.componentWrapper}>
            <QuestionInput fe_id="c1" props={{ title: '你的姓名', placeholder: '请输入姓名' }}/>
          </div>
          <div className={styles.componentWrapper}>
            <QuestionRadio fe_id="c2" props={{ 
              title: '你的性别',
              options: [
                { value: 'male', text: '男' },
                { value: 'female', text: '女' }
              ],
              value: 'male',
              isVertical: false
            }} />
          </div>
          <div className={styles.submitBtnContainer}>
            {/* <input type="submit" value="提交" /> */}
            <button type="submit">提交</button>
          </div>
        </form>
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
