import { styled } from "styled-components";

//手机是767、平板是768-991、电脑是992

export const HomeListWrapper=styled.div`

  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  .item{
    @media (max-width: 767px){
      width: 100%;
    }
    @media (min-width: 768px) and (max-width: 991px){
      width: 50%;
    }
    @media (min-width: 992px) and (max-width: 1300px){
      width: 33.33%;
    }
    @media (min-width: 1301px){
      width: 25%;
    }
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    margin: 8px 0px;
    cursor: pointer;

    .info{
      display: flex;
      margin: 8px 0;

      .desc{
        flex: 75%;

        .grey{
          color: #999;
          text-transform: uppercase;
          font-size: 12px;
        }
        .name{
          font-size: 15px;
          margin-bottom: 5px;
        }
        .country{
          color: #999;
          font-weight: 600;
          font-size: 12px;
        }
        .price{
          margin-top: 5px;
          font-weight: normal;

        }
      }

      .rating{
        flex: 25%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .star .ant-rate-star{
          margin-right: 1px;
        }
        .score{
          font-size: 12px;
          font-weight: bold;
        }
        .no-score{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
`