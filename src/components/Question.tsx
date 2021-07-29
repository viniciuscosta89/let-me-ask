import { QuestionStyle } from '../styles/components/Question';
import { ReactNode } from 'react';
import cx from 'classnames';

type QuestionProps = {
  content: string,
  author: {
    name: string,
    avatar: string
  },
  children?: ReactNode,
  isAnswered?: boolean,
  isHighlighted?: boolean,
}

export function Question({ content, author, children, isAnswered = false, isHighlighted = false }: QuestionProps) {
  return (
    <QuestionStyle className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered }
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img className="user-info__img" src={author.avatar} alt={author.name} />
          <span className="user-info__name">{author.name}</span>
        </div>
        <div className="user-info__btns">{children}</div>
      </footer>
    </QuestionStyle>
  );
}
