import tw from 'tailwind-styled-components';
import PointText from '../atoms/text/PointText';

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. 프론트엔드로 전직한 이유?</SubTit>
          온라인 여행사에서 근무하면서 IT 와 밀접한 업무를 수행하며, 특히 개발팀과의 협업을 통해 웹 개발에 대한 관심을
          가지게 되었습니다. 업무를 진행하는 과정에서 시스템의 효율성과 사용자 경험 개선을 위한 다양한 개발 요청을 하게
          되었고, 이러한 경험을 통해 웹 개발에 대한 깊은 흥미를 느끼게 되었습니다. 이를 계기로 웹 분야로의 전직을
          결심하였고, 2024년 9 월부터 25 년 2 월까지 이젠아카데미 DX 교육센터에서
          <PointText>
            UIUX 웹앱디자인(피그마 [Figma]) & 프론트엔드(react.js) 과정을 수강하며 HTML5, CSS, JavaScript,React, Styled
            Components, Redux Toolkit
          </PointText>
          등 다양한 프레임워크와 라이브러리을 습득했습니다. <br />
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</SubTit>
          <PointText>
            개발 과정에서 사용자의 니즈와 경험을 최우선으로 생각합니다. 그리고 문제가 발생했을 때는 단순히 해결책을 찾는
            것을 넘어, 근본 원인을 분석하고 이를 통해 성장하는 기회로 삼습니다.
          </PointText>
          한 번은 예상치 못한 버그가 발생했을 때, 코드를 꼼꼼히 분석하며 문제의 본질을 파악했고, 이 과정에서 새로운
          기술적 인사이트를 얻었습니다. 이런 경험들을 통해 기획 단계에서의 철저한 준비와 체계적인 코드 아키텍처의
          중요성을 알게 되었습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 자기계발을 위해 어떤 것들을 해왔는지?</SubTit>
          전공자가 아니기 때문에 새로운 기술과 이론을 습득하기 위해 다양한 방법으로 공부하고 있습니다. <br />그 중에서도
          자격증 공부와 기술적인 배경 지식에 대해서도 집중해왔습니다. 먼저,
          <PointText>웹디자인기능사와 정보처리 산업기사 필기 시험에 합격</PointText>하였습니다.
          <br />
          이를 통해 실무에서 필요한 기본적인 지식과 기술을 체계적으로 익혔으며, 개발자로서의 이해도를 높일 수
          있었습니다. 또한, 새로운 기술과 트렌드에 대한 학습을 꾸준히 해왔습니다.
          <PointText>
            동영상 강의나 오프라인 강의를 통해 최신 기술에 대한 이론과 실습을 병행하며, 프론트엔드 개발에 필요한 다양한
            도구와 라이브러리들을 학습
          </PointText>
          하고 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;
