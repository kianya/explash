import React from 'react';
import ReactDOM from 'react-dom';
import SingleLineGridList from './SingleLineGridList'
import SimpleTabs from './SimpleTabs'
import MediaList from './MediaList'
import MediaControlCard from './MediaControlCard'
import PositionedTooltips from './PositionedTooltips'

function App() {
  return (
      <div>
          <PositionedTooltips>
          </PositionedTooltips>
          <style>{'body { background-color: black; }'}</style>
          <SingleLineGridList>
          </SingleLineGridList>
          <div id="explashname"><p>DJ EXPLASH</p></div>
          <SimpleTabs>
          </SimpleTabs>
          <MediaList>
          </MediaList>
          <MediaControlCard>
          </MediaControlCard>
      </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));