import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  ButtonTitle,
  HeaderDiv,
  Icon,
  SearchButton,
  SearchDiv,
  Sign,
  SignDiv,
  Title,
  Title2,
} from './styles';
import { locationIcon, calendarIcon, searchIcon } from '@assets/index'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderDiv>
        <ButtonTitle onClick={() => navigate('/')}>
          <Title>EXOTIC</Title> <Title2>CARS</Title2>
        </ButtonTitle>

        <SearchDiv>
          <Button>
            <Icon src={locationIcon} alt='location' /> North Carolina, NC 90025
          </Button>
          <div>
            <Button style={{ marginRight: 5 }}>
              <Icon src={calendarIcon} alt='calendar' />
              06/06/2022
            </Button>
            <Button>
              <Icon src={calendarIcon} alt='calendar' />
              13/06/2022
            </Button>
          </div>
          <SearchButton>
            <img src={searchIcon} alt='search' />
          </SearchButton>
        </SearchDiv>

        <SignDiv>
          <Sign>Sign up</Sign>
          <Sign border={true}>Sign in</Sign>
        </SignDiv>

        <DropdownButton align='end' title='' id='dropdown-menu-align-end'>
          <Dropdown.Item eventKey='1'>Sign up</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Sign in</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey='3'>
            Search <BsSearch size={13} color='#7B89F4' />
          </Dropdown.Item>
        </DropdownButton>
      </HeaderDiv>
    </>
  );
}

export default Header;
