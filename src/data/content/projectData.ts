import { project5 } from './projecsDetailDatas/project5';
import { project8 } from './projecsDetailDatas/project8';
import { project9 } from './projecsDetailDatas/project9';

export const projectData = [
  {
    name: project5.name,
    type: 'team',
    title: project5.title,
    subject: '영화 감상 OTT Platform',
    tag: project5.tag,
    imgurl: project5.imgurl,
    giturl: project5.giturl,
    deployurl: project5.deployurl,
  },
  {
    name: project8.name,
    type: 'single',
    title: project8.title,
    subject: 'Next.js samsung-sdi 클론코딩',
    tag: project8.tag,
    imgurl: project8.imgurl,
    giturl: project8.giturl,
    deployurl: project8.deployurl,
  },
  {
    name: project9.name,
    type: 'single',
    title: project9.title,
    subject: '설화수 웹사이트 리뉴얼',
    tag: project9.tag,
    imgurl: project9.imgurl /* thumnailIMG */,
    giturl: project9.giturl,
    deployurl: project9.deployurl,
  },
];
