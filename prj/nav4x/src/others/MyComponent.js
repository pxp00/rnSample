import React from 'react'
import { Text, AppState } from 'react-native'

const MyComponent = () => {

    const [appState, setAppState] = React.useState(AppState.currentState)

    React.useEffect(() => {
      AppState.addEventListener('change', handleChanges)

      setAppState(AppState.currentState)

      return AppState.removeEventListener('change')
    },[])

    const handleChanges = (nextAppState) => {
        if (appState.match(/inactive|background/) && nextAppState === 'active') {

          console.log('App has come to the foreground!');
        } else {
          console.log('App has gone to the background!');
          // start your background task here
        }

        setAppState(nextAppState)
    }

    return  <Text>{appState}</Text>
}
