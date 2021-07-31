const toBeContinue = (() => {
  let arr = []
  for (let i = 0; i < 10; i++) {
    arr.push({
      link: '#',
      title: '다음 주제는?',
      subTitle: 'to be continue...',
    })
  }
  return arr
})()

const meta = [
  {
    link: '/interaction/panorama',
    title: '뉴욕 길거리',
    subTitle: '적당한 속도로 스크롤..!',
  },
  {
    link: '/interaction/light',
    title: '빛나는 글씨!',
    subTitle: '아무거나 타이핑..!',
  },
  ...toBeContinue,
]

export default meta
