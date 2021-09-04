import styled from "styled-components";
import { colors } from "utils/constants";
import { Icon } from 'UI';

import cupGold from 'assets/images/cupGold.png';
import cupSilver from 'assets/images/cupSilver.png';
import cupBronze from 'assets/images/cupBronze.png';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
`

const Counts = styled.div`
  display: flex;
  margin-left: 10px;
`
const Place = styled.div`

`


const Item = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  &:first-child {
    margin-left: 0px;
  }
  span {
    margin-left: 6px;
    font-size: 14px;
    &.win {
      color: ${colors.success};
    }
    &.draw {
      color: ${colors.darkGray};
    }
    &.defeat {
      color: ${colors.error};
    }
  }
`;

const cups = {
  '1': cupGold,
  '2': cupSilver,
  '3': cupBronze
}

export const GroupRewards = ({ placeOnTop, wins, draws, defeats }) => {

  const cup = cups[placeOnTop];

  return <Wrapper>
    <Place>
      {
        cup ? 
        <img src={cup} alt='cup' /> :
        <span>{placeOnTop}</span>
      }
    </Place>

    <Counts>
      <Item>
        <Icon type='win' size={20} />
        <span className='win'>{wins}</span>
      </Item>
      <Item>
        <Icon type='draw' size={24} />
        <span className='draw'>{draws}</span>
      </Item>
      <Item>
        <Icon type='defeat' size={19} />
        <span className='defeat'>{defeats}</span>
      </Item>
    </Counts>
  </Wrapper>
}