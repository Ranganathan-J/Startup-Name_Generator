import React from 'react'
import Card from '../ResultContainer/Card.tsx'
import './suggest.css'
type Props = {
    suggestNames: string[]
}

const SuggestList = ({suggestNames}: Props) => {
  return (
    <div className="suggest">
      {suggestNames?.length > 0 &&
        React.Children.toArray(
          suggestNames.map((name) => <Card name={name}/>)
        )}
    </div>
  )
}

export default SuggestList