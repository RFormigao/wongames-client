import Home, { HomeTemplateProps } from '@/templates/Home'

import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

export default function Index() {
  const props: HomeTemplateProps = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    upcomingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock
  }

  return <Home {...props} />
}
