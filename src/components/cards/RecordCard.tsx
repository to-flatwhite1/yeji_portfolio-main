import tw from 'tailwind-styled-components';
import { RecordDataT } from '../../types/type';

export const CardContainer = tw.section`
  overflow-hidden
  flex
  flex-col
  rounded
  h-[15rem]
  bg-lightGray
  relative  
  justify-between
  group
`;

export const TxtWrap = tw.div`
  p-5
  flex
  flex-col
  gap-3
  text-white
`;

export const Tit = tw.h4`
  font-bold
  text-2xl
  flex
  flex-col
  gap-1
`;

export const Role = tw.span`
  text-sm
`;

export const RecordUl = tw.ul`
  text-base
  text-[#A6A6A6]
`;

export const RecordList = tw.li`
  pl-2.5
  relative

  before:absolute
  before:w-1
  before:h-1
  before:bg-[#A6A6A6]
  before:block
  before:rounded-full
  before:left-0
  before:top-[0.625rem]
`;

export const Tags = tw.div`
  p-5
  flex
  gap-1
`;

export const Date = tw.span`
  text-[#A6A6A6]
  text-sm
`;

function RecordCard({ data, title, role, infos }: RecordDataT) {
  return (
    <CardContainer>
      <TxtWrap>
        <Date>{data}</Date>
        <Tit>
          {title}
          <Role>{role}</Role>
        </Tit>
        <RecordUl>
          <RecordList>{infos}</RecordList>
        </RecordUl>
      </TxtWrap>
    </CardContainer>
  );
}

export default RecordCard;
