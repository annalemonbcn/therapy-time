import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Feature from 'src/components/feature'
import { Language } from 'src/data/types'
import { formatLanguages, getSessionTypeString } from './utils'
import { toTitleCase } from 'src/utils'
import LanguageIcon from 'src/components/icons/languageIcon'
import OnlineIcon from 'src/components/icons/onlineIcon'
import EuroIcon from 'src/components/icons/euroIcon'

const FeaturesList = ({
  price,
  sessionType,
  languages
}: {
  price: string
  sessionType: string[]
  languages: Language[]
}) => {
  const sessionTypes = getSessionTypeString(sessionType)
  const langs = formatLanguages(languages)

  return (
    <HorizontalContainer horizontalCenter="space-between">
      <Feature>
        <Feature.Icon>
          <EuroIcon color="main" size={20} />
        </Feature.Icon>
        <Feature.Title title="Price" />
        <Feature.Subtitle subTitle={`${price}€/h`} />
      </Feature>
      <Feature>
        <Feature.Icon>
          <OnlineIcon size={20} />
        </Feature.Icon>
        <Feature.Title title="Session Type" />
        <Feature.Subtitle subTitle={toTitleCase(sessionTypes)} />
      </Feature>
      <Feature>
        <Feature.Icon>
          <LanguageIcon size={20} />
        </Feature.Icon>
        <Feature.Title title="Languages" />
        <Feature.Subtitle subTitle={toTitleCase(langs)} />
      </Feature>
    </HorizontalContainer>
  )
}

export default FeaturesList
