import axios from 'axios'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "./index.css";


import ListPage from "./components/ListPage.vue"
import DataPage from "./components/DataPage.vue"

const routes = [
  { name: 'list', path:'/', component: ListPage},
  { name: 'data', path:'/data/:movieId', component: DataPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
  
const app = createApp(App)

app.config.globalProperties.$axios = axios
app.config.globalProperties.$movie = [
    {
        img : 'https://an2-img.amz.wtchn.net/image/v2/JlaOuSAWgn33KwA2yNrqBA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk56STVlREV3T0RCeE9EQWlYU3dpY0NJNklpOTJNaTl6ZEc5eVpTOXBiV0ZuWlM4eE5qTXhNREV6TmprMk5qQXlOekk1TmpnMEluMC5qTFVtQzhReWc3RFlWZnNJWUhiNGs2UUxXM3Mzei1YajZXamNHZTRtdndB',
        number : 1,
        name : '명량',
        director : '김한민',
        release : '2014. 07. 30.',
        accrue : '17,615,844명',
    },
    {
        img : 'https://file2.nocutnews.co.kr/newsroom/image/2019/01/27/20190127122932672856_0_777_1106.jpg',
        number : 2,
        name : '극한직업',
        director : '이병헌',
        release : '2019. 01. 23.',
        accrue : '16,266,338명',
    },
    {
        img : 'https://w.namu.la/s/0340fc7fbb2b58252b706e8770f020d1d48f719a1de2a7c116005c98d79246f2f10f7205718045f7fbd663a8bb09ff94d2aab857a547bbc91319b9d9d5aa13651ca5bff329a719ef7365bef2fa0a794577e7038819283a3199da52da6afb9bd918690b9236ec93b95ae72b44566be04a',
        number : 3,
        name : '신과함께-죄와 벌',
        director : '김용화',
        release : '2017. 12. 20.',
        accrue : '14,414,658명',
    },
    {
        img : 'https://image.ajunews.com/content/image/2014/11/10/20141110092504483346.jpg',
        number : 4,
        name : '국제시장',
        director : '윤제균',
        release : '2014. 12. 17.',
        accrue : '14,264,059명',
    },
    {
        img : 'https://play-lh.googleusercontent.com/OxkGCb8tqaKSEGCDU4vGmvGuMG7cNpa6OXY18I4DPSzNxq9BYxrIiAg7enxOHrfSsE_b',
        number : 5,
        name : '어벤져스: 엔드게임',
        director : '앤소니 루소, 조 루소',
        release : '2019. 04. 24.',
        accrue : '13,977,602명',
    },
    {
        img : 'https://play-lh.googleusercontent.com/5zPcz2v-kOsj7L4GUjhrI-46R0bkr4-OBFMoPxFApYwwYIJBTLTp54hTRm8XL1-NkCif',
        number : 6,
        name : '겨울왕국 2',
        director : '제니퍼 리, 크리스 벅',
        release : '2019. 11. 21.',
        accrue : '13,747,792명',
    },
    {
        img : 'https://biz.chosun.com/resizer/7pTf0zckjFVi-Usehfel6dXIrOI=/1978x2835/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/HKULIOALG6XJFWOVNIGV7OVHWQ.jpg',
        number : 7,
        name : '아바타',
        director : '제임스 카메론',
        release : '2009. 12. 17.',
        accrue : '13,486,963명',
    },
    {
        img : 'https://web-cf-image.cjenm.com/crop/660x950/public/share/metamng/programs/veteran-movie-poster-ko-001-02.jpg?v=1662031810',
        number : 8,
        name : '베테랑',
        director : '류승완',
        release : '2015. 08. 05.',
        accrue : '13,414,484명',
    },
    {
        img : 'https://mblogthumb-phinf.pstatic.net/20120810_255/qnslsksl_1344609760205HGAH1_JPEG/movie_image5.jpg?type=w2',
        number : 9,
        name : '도둑들',
        director : '최동훈',
        release : '2012.07.25.',
        accrue : '12,984,701명',
    },
    {
        img : 'https://image.news1.kr/system/photos/2013/2/19/382517/article.jpg/dims/optimize',
        number : 10,
        name : '7번방의 선물',
        director : '이환경',
        release : '2013. 01. 23.',
        accrue : '12,812,144명',
    },
    // {
    //     number : 11,
    //     name : '알라딘',
    //     release : '2019. 05. 23.',
    //     accrue : '12,723,777명',
    // },
    // {
    //     number : 12,
    //     name : '암살',
    //     release : '2015. 07. 22.',
    //     accrue : '12,706,855명',
    // },
    // {
    //     number : 13,
    //     name : '범죄도시2',
    //     release : '2022. 05. 18.',
    //     accrue : '12,693,146명',
    // },
    // {
    //     number : 14,
    //     name : '광해, 왕이 된 남자',
    //     release : '2012. 09. 13.',
    //     accrue : '12,324,062명',
    // },
    // {
    //     number : 15,
    //     name : '신과함께-인과 연',
    //     release : '2018. 08. 01.',
    //     accrue : '12,278,010명',
    // },
    // {
    //     number : 16,
    //     name : '택시운전사',
    //     release : '2017. 08. 02.',
    //     accrue : '12,189,698명',
    // },
    // {
    //     number : 17,
    //     name : '부산행',
    //     release : '2016. 07. 20.',
    //     accrue : '11,572,066명',
    // },
    // {
    //     number : 18,
    //     name : '변호인',
    //     release : '2013. 12. 18.',
    //     accrue : '11,375,223명',
    // },
    // {
    //     number : 19,
    //     name : '해운대',
    //     release : '2009. 07. 22.',
    //     accrue : '11,325,117명',
    // },
    // {
    //     number : 20,
    //     name : '어벤져스: 인피니티 워',
    //     release : '2018. 04. 25.',
    //     accrue : '11,233,176명',
    // },
    // {
    //     number : 21,
    //     name : '실미도',
    //     release : '2003. 12. 24.',
    //     accrue : '11,081,000명',
    // },
    // {
    //     number : 22,
    //     name : '괴물',
    //     release : '2006. 07. 27.',
    //     accrue : '10,917,400명',
    // },
    // {
    //     number : 23,
    //     name : '왕의 남자',
    //     release : '2005. 12. 29.',
    //     accrue : '10,514,177명',
    // },
    // {
    //     number : 24,
    //     name : '어벤져스: 에이지 오브 울트론',
    //     release : '2015. 04. 23.',
    //     accrue : '10,504,007명',
    // },
    // {
    //     number : 25,
    //     name : '인터스텔라',
    //     release : '2014. 11. 06.',
    //     accrue : '10,326,240명',
    // },
    // {
    //     number : 26,
    //     name : '기생충',
    //     release : '2019. 05. 30.',
    //     accrue : '10,313,345명',
    // },
    // {
    //     number : 27,
    //     name : '겨울왕국',
    //     release : '2014. 01. 16.',
    //     accrue : '10,303,058명',
    // },
];

// createApp(App).mount('#app')

app.use(router)
app.mount('#app')