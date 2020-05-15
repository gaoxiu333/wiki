import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {syntaxTheme} from '../theme/code'
export default ({children, className}) => {
  const language = className?className.replace(/language-/, ''):'sh'
  return (
    <Highlight {...defaultProps} theme={syntaxTheme} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}