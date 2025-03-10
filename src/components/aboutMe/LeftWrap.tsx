import tw from 'tailwind-styled-components';
import myImgIm from '../../assets/images/mimoticon.webp';

import TagText from '../atoms/tag/TagTxt';
import { aboutMetags } from '../../data/content/aboutmeData';

const LeftContainer = tw.div`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  flex-2
`;

const Img = tw.img`
  max-md:w-[60vw]
`;

const FlexBox = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-1
`;

const TagTxtWrap = tw.div`
  flex
  gap-1
`;

const LeftWrap = () => {
  return (
    <LeftContainer>
      <FlexBox>
        <Img src={myImgIm} loading="lazy" alt="이모지 이미지" />
        <TagTxtWrap>
          {aboutMetags.map((tag, idx) => (
            <TagText key={idx} tag={tag.name} />
          ))}
        </TagTxtWrap>
      </FlexBox>
    </LeftContainer>
  );
};

export default LeftWrap;
