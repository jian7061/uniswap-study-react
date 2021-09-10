import styled from 'styled-components';
import { Main } from "../components/common";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-gap: 16px;

& > Main {
  grid-column: 2 / 12;
}
`;

export function Rule(): JSX.Element {
  return (
    <Container>
      <Main>
        <article>
          <h1>bean the DAO</h1>
          <p>bean the DAO는 다양한 프로토콜의 거버넌스를 관리하는 하나의 Social DAO입니다. 다양한 프로토콜을 구축하고 관리 권한을 bean the DAO에 위임합니다. 시너지 효과를 위해 사용자 소유의 다양한 거버넌스 토큰을 bean the DAO에 위임하고 투표로 발생되는 이익을 위임자들에게 배분합니다.</p>
        </article>

        <article>
          <h2>Token 정보</h2>
          <ul>
            <li>이름: bean the token</li>
            <li>기호: BEAN</li>
            <li>소수점: 1e18</li>
            <li>총 발행량: 100,000개</li>
            <li>토큰 주소: 0x427EbB6260173E77136214D11509b070DF09Ea89</li>
          </ul>
        </article>

        <article>
          <h2>규칙</h2>
        </article>

        <article>
          <h3>기본</h3>
          <ul>
            <li>거버넌스는 3년간 토큰을 폭넓게 배포할 수 있도록 하여야 합니다.</li>
            <li>규칙을 해석하거나, 수정을 고려할 때에는 해당 규칙의 맥락을 기반으로 해석하여야 합니다. 구성원들 중 누구나 규칙으로 인해 피해를 입거나, 특정한 이익을 얻어서는 안됩니다.</li>
          </ul>
        </article>

        <article>
          <h3>토큰의 배포</h3>
          <ul>
            <li>커뮤니티를 위한 예약분량 - 29,097개</li>
              <ul>
                <li>With☕️ 토큰 사용과 리뷰 작성을 완료한 이용자</li>
                  <ul>
                    <li>매번 약속이 이행된 시점에서, 1~30, 40, 50, 60, 70중에서 숫자를 랜덤으로 뽑습니다.</li>
                    <li>리뷰 작성이 확인되면 뽑힌 숫자만큼, 커뮤니티 금고에서 즉시 지불됩니다.</li>
                  </ul>
                <li>bean the DAO의 주요 기여자에게 계약된 분량만큼 커뮤니티 금고에서 매 초당 부여됩니다.</li>
              </ul>
            <li>주 고용인을 위한 예약분량 - 70,000개</li>
              <ul>
                <li>3년간 매 초당 부여됩니다.</li>
              </ul>
          </ul>
        </article>

        <article>
          <h3>토큰</h3>
          <ul>
            <li>거버넌스는 모든 예약 분량이 유동화 될 때 까지 토큰의 생성 및 소각의 규칙을 수정하거나 추가할 수 없습니다.</li>
            <li>모든 예약 분량이 유동화 될 때 까지 주 고용인은 모든 거버넌스에 참여할 수 없습니다.</li>
            <li>토큰을 구매하고자 하는 사람이나 단체는 전체 발행량의 최대 1%만 구매할 수 있으며, 이는 커뮤니티 예약 분량에서 20% 그리고 주 고용인 예약 분량에서 80%를 충당하여 판매합니다. 판매된 금액의 30%는 주 고용인에게 지급되며, 나머지 70%는 커뮤니티 금고에 적립됩니다.</li>
              <ul>
                <li>토큰 구매자는 공개적이고, 누구나 신원을 알 수 있는 형태로 구매의사를 밝혀야 합니다. 다만 판매를 허용하는 것은 커뮤니티 구성원의 투표에 의해 처리됩니다.</li>
                <li>토큰 구매자는 유동화된 토큰의 많은 분량을 고정가로 구매하는 것이기 때문에 구매 시점에서 일 평균 시장가의 5%를 추가 지급하여 구매하여야 합니다.</li>
                <li>bean the DAO는 커뮤니티는 구매자가 장기적인 비전을 가지고 토큰을 구매한다는 의사를 가지고 있다고 판단하며, 이러한 문맥에 따라 적절한 추가 규칙이 적용될 수 있습니다.</li>
                <li>구매한 토큰은 구매 시점으로 부터 3년간 매 초당 부여됩니다.</li>
              </ul>
          </ul>
        </article>

        <article>
          <h3>투표</h3>
          <ul>
            <li>DAO에 투표권을 가지는 방법은  BEAN:ETH Pair에 대한 Uniswap V3과 Trident에 유동성을 다음의 범위로 제공하고 NFT를 Governance에 예치하는 것으로 투표권을 행사할 수 있습니다.</li>
            <ul>
              <li>0.001 ETH ~ 1 ETH: 1 BEAN, 범위로 유동성이 제공되어야 합니다.</li>
              <li>유동성 풀의 교환으로 발생되는 발생되는 수수료 중 BEAN은 소각되며, ETH는 커뮤니티 금고로 이동합니다.</li>
              <li>BEAN을 소유하지 못한 경우에, ETH를 예치하는 것으로 투표권을 획득할 수 있습니다.</li>
              <li>1 BEAN이 1 ETH이상의 가치로 교환될 때 투표권 소유자는 BEAN을 소각하고, 동일한 수량의 ETH로 교환되어 DAO에 대한 접근 권한을 잃습니다.</li>
            </ul>
          </ul>
        </article>

        <article>
          <h3>프로토콜</h3>
          <ul>
            <li>bean을 통해서 배포된 프로토콜의 거버넌스는 bean the DAO의 거버넌스 투표권으로 수행되며, 모든 관리 권한을 가집니다.</li>
            <li>bean the DAO는 프로토콜이 자율적으로 동작할 수 있도록 방향성을 가진 거버넌스를 수행하여야 합니다.</li>
            <li>프로토콜이 독립할 때, DAO에 투표권을 가진 이용자는 투표권을 포기함으로 프로토콜의 거버넌스 토큰 중 일부를 획득합니다.</li>
            <li>모든 배포되는 프로토콜은 별도의 서버가 존재하지 않는 방법으로 작동할 수 있어야 합니다.</li>
          </ul>
        </article>
      </Main>
    </Container>
  );
}