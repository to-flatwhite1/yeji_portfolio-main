export const project5 = {
  name: 'OTT Platform project',
  pointcolor: 'before:bg-[#FA9B59]',
  title: 'OTT Platform project - Reelpick',
  subtext:
    '릴픽(REELPICK)은 사용자가 직접 보고싶은 영화 또는 영상을 선택하여 \n자신만의 취향대로 선택해서 볼 수 있는 OTT 플랫폼입니다.\n 프로젝트명 REELPICK은 영화 촬영 시 사용되는 필름 릴(REEL)에서\n 착안하여 사용자가 선택(PICK)한 콘텐츠를 중심으로 서비스를 제공한다는 의미를 담고 있습니다.',
  data: '2023.07 - 2023.08',
  team: '3인 (프론트엔드 3명)',
  tag: ['팀'],
  imgurl:
    'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/Reelpick.webp',

  giturl: 'https://github.com/kksladder/REELPICKott3',
  depoloyurl: 'reelpic-kott3-icpz.vercel.app/',
  detailimginfo: [
    {
      imgurl:
        'https://raw.githubusercontent.com/to-flatwhite1/yeji_portfolio-main/refs/heads/main/src/assets/images/Reelpick.webp',
      subject: '메인 화면',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio2.webp',
      subject: '회원가입',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio3.webp',
      subject: '로그인',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio4.webp',
      subject: '멤버십',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio4.webp',
      subject: '마이페이지',
    },
  ],
  featinfo: [
    'tmdb API를 활용해 영화 표출',
    '시청기록 찜 기능',
    '원하는 영화 검색 가능',
    '회원 가입 프로필 추가, 로그인 로그아웃 구현',
  ],
  tools: [
    {
      title: 'Vite',
      detail:
        'Vite는 최신 브라우저의 기본 ES 모듈 기능을 사용하여 더 빠른 개발 서버 시작 및 주문형 컴파일을 가능하게 합니다. 이로 인해 CRA의 Webpack 기반 서버에 비해 응답성이 뛰어난 개발 경험을 얻을 수 있었습니다.',
    },
    {
      title: 'React',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    {
      title: 'Redux Toolkit',
      detail:
        'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
    },
    {
      title: 'Redux',
      detail:
        '애플리케이션에서 상태 관리를 단순화해주는 라이브러리입니다. 애플리케이션의 상태를 중앙에서 관리하며, 상태 변경을 예측 가능한 방식으로 처리할 수 있도록 도와줍니다. 이를 통해 여러 컴포넌트 간의 상태 공유와 복잡한 상태 변경 로직을 효율적으로 관리할 수 있습니다.',
    },
    {
      title: 'Styled Components',
      detail:
        'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.',
    },
  ],
  parts: [
    {
      title: '마이페이지,로그인 로그아웃 회원가입',
      detailList: [
        `리액트 바이트(React-Boot) 기반으로 앱 생성 및 라우팅 설정하며 리덕스(Redux)를 활용한 상태 관리 및 데이터 흐름 관리를 하였습니다.\n로컬스토리지를 이용한 사용자 정보 저장 및 유지 기능 구현 하였습니다.`,
      ],
    },
    {
      title: '플로우차트,와이어프레임',
      detailList: [
        `사이트의 흐름을 알 수 있도록 플로우차트를 만들었으며 디자인 작업을 위해  \`Figma\`을 활용해 팀원들과 [flow chart,와이어프레임]을 구체화 함`,
      ],
    },
  ],
};
