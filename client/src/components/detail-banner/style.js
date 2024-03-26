import { styled } from "styled-components";

export const DetailBannerWrapper = styled.div`

  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .titleText{
      font-size: 28px;
      font-weight: 500;
    }

    .collect{
      display: block;
      padding: 15px 20px;
      border-radius: 30px;
      background-color: rgba(0,0,0,0);
      transition: background-color 200ms ease-in-out;

      &:hover{
        background-color: #f7f7f7;
      }

      .collectText{
        font-weight: bold;
        margin-left: 8px;
        text-decoration: underline;
      }
    }
  }
`

