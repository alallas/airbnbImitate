import { styled } from "styled-components";

export const StarWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};

  .score{

    .star .ant-rate-star{
      margin-right: 1px;
    }
    :where(.css-dev-only-do-not-override-djtmh8).ant-rate{
      display: block;
    }

    .text{
      font-size: ${props => props.textSize}px;
      font-weight: bold;
      margin-bottom: ${props => props.pMarBotm}px;

    }
  }


  .no-score{
    font-size: 12px;
    color: #999;
  }

`
