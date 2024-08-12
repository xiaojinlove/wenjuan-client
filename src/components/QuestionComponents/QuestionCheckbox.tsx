import React, { FC } from 'react'
import styles from './QuestionCheckbox.module.scss'

type PropsType = {
  fe_id: string
  props: {
    title: string
    list: Array<{
      value: string
      text: string
      checked: boolean
    }>
    isVertical: boolean
  }
}
const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, list = [], isVertical } = props

  return <>
    <p>{title}</p>
    <ul className={styles.list}>
      {list.map(item => {
        const { value, text , checked} = item

        //判断竖向、横向
        let liClassName = ''
        if (isVertical) liClassName = styles.verticalItem
        else liClassName = styles.horizontalItem

        return <li key={value} className={liClassName}>
          <label>
            <input type='checkbox' name={fe_id} checked={checked} />
            {text}
          </label>
        </li>
      })}
    </ul>
  </>
}

export default QuestionCheckbox