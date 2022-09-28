import styled from "styled-components";

const CardList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const WrapperCard = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 10px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
`;

export const Card = (props) => {
  const { title, id, handleClick } = props;
  return (
    <>
      <CardList>
        <WrapperCard onClick={handleClick}>
          <div style={{ disply: "flex", flexDirection: "column" }}>
            <h3>Id:{id}</h3>
            <h3>{title}</h3>
          </div>
        </WrapperCard>
      </CardList>
    </>
  );
};
