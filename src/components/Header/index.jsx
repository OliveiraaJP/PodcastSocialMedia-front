import React, { useContext, useMemo, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import UserContext from "../../contexts/userContext";
import { Container } from "./styles";

const Header = ({ username, imageUrl, searchBarFunction, value, }) => {
  const [search, setSearch] = useState(false);
  const searchBar = useRef(null)
  const {userData} = useContext(UserContext)

  async function focusOnInput(){
    await setSearch(!search)
    searchBar.current.focus()
  }

  return (
    <>
      {!search && (
        <Container>
          <span>
            <img src={imageUrl} alt="" />
            <p>{username}</p>
          </span>
          <div>
            <BiSearchAlt
              size="50px"
              color="#666600"
              onClick={focusOnInput}
            />
          </div>
        </Container>
      )}

      {search && (
        <Container>
          <span>
            <img src={imageUrl} alt="" />
            <input type="text" width='100vw' ref={searchBar} value={value} onChange={searchBarFunction}/>
          </span>
        </Container>
      )}
    </>
  );
};

export default Header;
