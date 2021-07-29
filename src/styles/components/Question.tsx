import styled from 'styled-components';

export const QuestionStyle = styled.div`
  background-color: #fefefe;
  border: 1px solid #fefefe;
  border-radius: 8px;
  padding: 1.5rem;
  transition: var(--transition);

  & + .question {
    margin-top: .5rem;
  }

  p {
    color: #29292e;
  }

  &.answered {
    background-color: #DBDCDD;
    border-color: #DBDCDD;
  }

  &.highlighted {
    background-color: #F4F0FF;
    border-color: var(--primary);

    .user-info__name {
      color: #29292E;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    .user-info {
      display: flex;
      align-items: center;

      &__img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      &__name {
        color: #737380;
        font-size: 14px;
        margin-left: 8px;
      }

      &__btns {
        display: flex;
        gap: 1rem;
      }
    }

    .like {
      &__btn {
        background: none;
        border: none;
        display: flex;
        align-items: flex-end;
        color: #737388;
        fill: transparent;
        stroke: #737388;
        transition: var(--transition);

        &:hover {
          filter: brightness(0.75);
        }

        &.liked {
          stroke: var(--primary);
        }
      }

      &__number {
        margin-right: 8px;
      }
    }
  }

`
