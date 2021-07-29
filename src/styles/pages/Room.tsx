import styled from "styled-components";

export const RoomStyle = styled.div`
  .header {
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;

    &__content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__img {
      max-height: 45px;
    }

    &__column {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .btn {
        height: 40px;
      }
    }
  }

  .content {
    max-width: 800px;
    margin: 0 auto;

    &__room-title-wrapper {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;
    }

    &__room-title {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      color: #29292e;
    }

    &__room-tag {
      margin-left: 1rem;
      background-color: #e559f9;
      border-radius: 2rem;
      padding: 0.5rem 1rem;
      color: var(--white);
      font-size: 14px;
      font-weight: 500;
    }
  }

  .form {
    &__textarea {
      width: 100%;
      border: none;
      padding: 1rem;
      border-radius: .5rem;
      background-color: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 100px;
      margin-bottom: 1rem;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-info {
        display: flex;
        align-items: center;

        &__img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        &__name {
          color: #29292e;
          font-size: 14px;
          font-weight: 500;
          margin-left: 8px;
        }
      }
    }

    &__info {
      font-size: 14px;
      color: #737380;
      font-weight: 500;
    }

    &__link {
      background: none;
      border: none;
      color: var(--primary);
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }

  }

  .question-list {
    margin-top: 32px;
  }
`
